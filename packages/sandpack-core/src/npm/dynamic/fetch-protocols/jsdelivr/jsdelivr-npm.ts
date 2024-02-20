import {
  FetchProtocol,
  Meta,
  downloadDependency,
} from '../../fetch-npm-module';
import { fetchWithRetries } from '../utils';
import { JSDelivrMeta, normalizeJSDelivr } from './utils';
// note: 判断是否为私有npm
// TODO：修正逻辑判断
const isPrivateDependencies = (name: string) => {
  if (name.includes('xxx')) return true;
  return false;
};
export class JSDelivrNPMFetcher implements FetchProtocol {
  // TODO 切换为内网jsNPM
  async file(name: string, version: string, path: string): Promise<string> {
    const url = `https://cdn.jsdelivr.net/npm/${name}@${version}${path}`;
    console.log(url, '--- class JSDelivrNPMFetche file');
    if (isPrivateDependencies(name)) {
      window
        .fetch('http://localhost:4545/api/file', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            version,
            fileName: path,
          }),
        })
        .then(response => response.json())
        .then(data => {
          return data?.content || '';
        })
        .catch(() => {
          return '';
        });
    }
    const result = await fetchWithRetries(url).then(x => x.text());

    return result;
  }
  // note：获取依赖元数据 待确认修改项
  async meta(name: string, version: string): Promise<Meta> {
    // if it's a tag it won't work, so we fetch latest version otherwise
    // TODO 模拟flat逻辑 还原文件列表
    if (isPrivateDependencies(name)) {
      return {
        xxx: true,
      };
    }

    const latestVersion = /^\d/.test(version)
      ? version
      : JSON.parse(
          (await downloadDependency(name, version, '/package.json')).code
        ).version;

    const url = `https://data.jsdelivr.com/v1/package/npm/${name}@${latestVersion}/flat`;
    const result: JSDelivrMeta = await fetchWithRetries(url).then(x =>
      x.json()
    );

    return normalizeJSDelivr(result.files, {});
  }
}
