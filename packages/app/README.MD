
```
app
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc
├─ .vscode
│  └─ settings.json
├─ babel.config.js
├─ config
│  ├─ babel.dev.js
│  ├─ babel.prod.js
│  ├─ build.js
│  ├─ flow
│  │  ├─ css.js.flow
│  │  └─ file.js.flow
│  ├─ paths.js
│  ├─ polyfills.js
│  ├─ stubs
│  │  ├─ load-rules.compiled.js
│  │  ├─ load-rules.js
│  │  └─ lru-cache.js
│  ├─ webpack.common.js
│  ├─ webpack.dev.js
│  ├─ webpack.embed.js
│  ├─ webpack.lint.js
│  └─ webpack.prod.js
├─ integration-tests
│  ├─ browser-tests
│  │  └─ browsers.test.js
│  ├─ BrowserStackLocal
│  ├─ jest.config.json
│  ├─ setup.js
│  └─ tests
│     ├─ sandboxes.test.js
│     ├─ utils.js
│     └─ __image_snapshots__
│        ├─ 1oknw8q8zq-snap.png
│        ├─ 2ppkvzx570-snap.png
│        ├─ 31kn7voz4q-snap.png
│        ├─ 4888omqqz7-snap.png
│        ├─ 4j7m47vlm4-snap.png
│        ├─ 6w66jzw3mn-snap.png
│        ├─ 98o3k45m8p-snap.png
│        ├─ algolia-doc-onboarding-demos-angular-media-snap.png
│        ├─ angular-snap.png
│        ├─ circle-svg-snap.png
│        ├─ CompuIves-codesandbox-presentation-snap.png
│        ├─ cssinjs-egghead-templates-and-variables-snap.png
│        ├─ faceyspacey-redux-first-router-codesandbox-snap.png
│        ├─ gpgpu-curl-noise-yq6y8-snap.png
│        ├─ j2wpjwqj93-snap.png
│        ├─ k3q1zjjml5-snap.png
│        ├─ lp5rjr0z4z-snap.png
│        ├─ mZRjw05yp-snap.png
│        ├─ n5wy74w8vl-snap.png
│        ├─ new-snap.png
│        ├─ nOymMxyY-snap.png
│        ├─ o29j95wx9-snap.png
│        ├─ pm79km5lmj-snap.png
│        ├─ react-ts-snap.png
│        ├─ reduxjs-redux-examples-real-world-snap.png
│        ├─ reduxjs-redux-examples-todomvc-snap.png
│        ├─ rl2m3xklyo-snap.png
│        ├─ sass-imports-snap.png
│        ├─ scss-bulma-ikgrv-snap.png
│        ├─ scss-mixins-snap.png
│        ├─ sebn6-snap.png
│        ├─ svelte-snap.png
│        ├─ utmms-snap.png
│        ├─ vanilla-snap.png
│        ├─ vue-2-css-module-vuzkt-snap.png
│        ├─ vue-3-basics-program-easily-snap.png
│        ├─ vue-snap.png
│        ├─ vVoQVk78-snap.png
│        ├─ vx55c-snap.png
│        ├─ xp5qy8r93q-snap.png
│        ├─ y26rj99yov-snap.png
│        ├─ ymjwwrw2rj-snap.png
│        ├─ zw9zjy0683-snap.png
│        ├─ zx22owojr3-snap.png
│        └─ __diff_output__
├─ package.json
├─ public
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ apple-touch-icon-152x152.png
│  ├─ apple-touch-icon-180x180.png
│  ├─ apple-touch-icon.png
│  ├─ browserconfig.xml
│  ├─ codesandbox-1024.png
│  ├─ codesandbox-128.png
│  ├─ codesandbox-16.png
│  ├─ codesandbox-256.png
│  ├─ codesandbox-32.png
│  ├─ codesandbox-512-1.png
│  ├─ codesandbox-512.png
│  ├─ codesandbox.svg
│  ├─ csb-ios.svg
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ manifest.json
│  ├─ mstile-144x144.png
│  ├─ mstile-150x150.png
│  ├─ mstile-310x150.png
│  ├─ mstile-310x310.png
│  ├─ mstile-70x70.png
│  ├─ robots.txt
│  ├─ safari-pinned-tab.svg
│  └─ site.webmanifest
├─ README.MD
├─ scripts
│  ├─ build.js
│  ├─ codegen.js
│  ├─ copy-assets.js
│  ├─ deploy.js
│  ├─ minify.js
│  ├─ replace-gql-schema.js
│  ├─ sentry-create-release.js
│  ├─ sentry-deploy-release.js
│  ├─ start.js
│  ├─ stats.js
│  └─ utils
│     ├─ chrome.applescript
│     ├─ prompt.js
│     └─ WatchMissingNodeModulesPlugin.js
├─ src
│  ├─ app
│  │  ├─ components
│  │  │  ├─ CodeEditor
│  │  │  │  ├─ CodeMirror
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ Configuration
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ FilePath
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ FuzzySearch
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ types.js
│  │  │  │  ├─ types.ts
│  │  │  │  └─ VSCode
│  │  │  │     ├─ Configuration
│  │  │  │     │  ├─ elements.ts
│  │  │  │     │  └─ index.tsx
│  │  │  │     ├─ elements.ts
│  │  │  │     ├─ icon-theme.css
│  │  │  │     ├─ index.tsx
│  │  │  │     └─ workbench-theme.css
│  │  │  ├─ ContextMenu
│  │  │  │  ├─ elements.ts
│  │  │  │  └─ index.tsx
│  │  │  ├─ Create
│  │  │  │  ├─ CreateBox
│  │  │  │  │  ├─ CreateBoxForm.tsx
│  │  │  │  │  └─ TemplateInfo.tsx
│  │  │  │  ├─ CreateBox.tsx
│  │  │  │  ├─ elements.tsx
│  │  │  │  ├─ GenericCreate.tsx
│  │  │  │  ├─ ImportRepository
│  │  │  │  │  ├─ AccountSelect.tsx
│  │  │  │  │  ├─ AuthorizeForSuggested.tsx
│  │  │  │  │  ├─ ForkRepoForm.tsx
│  │  │  │  │  ├─ Import.tsx
│  │  │  │  │  ├─ ImportInfo.tsx
│  │  │  │  │  ├─ RestrictedPrivateRepositoriesImport.tsx
│  │  │  │  │  ├─ SuggestedRepositories.tsx
│  │  │  │  │  ├─ types.ts
│  │  │  │  │  ├─ useGithubRepo.ts
│  │  │  │  │  ├─ useOrganizationRepos.ts
│  │  │  │  │  ├─ useValidateRepoDestination.ts
│  │  │  │  │  ├─ utils.test.ts
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ ImportRepository.tsx
│  │  │  │  ├─ ImportTemplate
│  │  │  │  │  ├─ ImportTemplate.tsx
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ SearchBox
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ SearchBox.tsx
│  │  │  │  ├─ TemplateCard.tsx
│  │  │  │  ├─ TemplateList.tsx
│  │  │  │  └─ utils
│  │  │  │     ├─ api.ts
│  │  │  │     ├─ constants.ts
│  │  │  │     ├─ queries.ts
│  │  │  │     └─ types.ts
│  │  │  ├─ Cube
│  │  │  │  ├─ Cube.tsx
│  │  │  │  ├─ elements.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ dashboard
│  │  │  │  ├─ Button.tsx
│  │  │  │  ├─ InputSelect.tsx
│  │  │  │  ├─ InputText.tsx
│  │  │  │  ├─ Label.tsx
│  │  │  │  ├─ LargeCTAButton.tsx
│  │  │  │  └─ Textarea.tsx
│  │  │  ├─ Debug
│  │  │  │  ├─ Debug.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ DelayedAnimation.ts
│  │  │  ├─ GitHubLogo.tsx
│  │  │  ├─ GitProgress
│  │  │  │  ├─ elements.ts
│  │  │  │  └─ index.tsx
│  │  │  ├─ Integration
│  │  │  │  ├─ DetailInfo
│  │  │  │  │  ├─ DetailInfo.tsx
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ Integration.tsx
│  │  │  ├─ LinkButton.tsx
│  │  │  ├─ Loading
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ Loading.tsx
│  │  │  ├─ Markdown
│  │  │  │  ├─ Code.tsx
│  │  │  │  ├─ Image.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ InlineCode.tsx
│  │  │  │  └─ Link.tsx
│  │  │  ├─ Modal
│  │  │  │  └─ index.js
│  │  │  ├─ Notifications
│  │  │  │  ├─ Content.tsx
│  │  │  │  ├─ Filters.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ notifications
│  │  │  │  │  ├─ Comment.tsx
│  │  │  │  │  ├─ Icons.tsx
│  │  │  │  │  ├─ Mention.tsx
│  │  │  │  │  ├─ Menu.tsx
│  │  │  │  │  ├─ PullRequestReviewReceived.tsx
│  │  │  │  │  ├─ PullRequestReviewRequest.tsx
│  │  │  │  │  ├─ SandboxInvitation.tsx
│  │  │  │  │  ├─ TeamAccepted.tsx
│  │  │  │  │  ├─ TeamInvite.tsx
│  │  │  │  │  └─ TeamInviteRequest.tsx
│  │  │  │  ├─ Skeleton.js
│  │  │  │  └─ types.ts
│  │  │  ├─ OpaqueLogo.tsx
│  │  │  ├─ Overlay
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ Overlay.tsx
│  │  │  ├─ Preview
│  │  │  │  ├─ DevTools
│  │  │  │  │  ├─ Console
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ Input
│  │  │  │  │  │     ├─ elements.ts
│  │  │  │  │  │     └─ index.tsx
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ Problems
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ FileErrors.tsx
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ Message.tsx
│  │  │  │  │  ├─ React-Devtools
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ Tabs
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ Tab
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ UnreadDevToolsCount.tsx
│  │  │  │  │  │  └─ TabDropZone
│  │  │  │  │  │     └─ index.tsx
│  │  │  │  │  ├─ Terminal
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ Shell
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ Term.tsx
│  │  │  │  │  │  ├─ ShellTabs
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ styles.css
│  │  │  │  │  │  ├─ terminal-theme.ts
│  │  │  │  │  │  └─ types.ts
│  │  │  │  │  ├─ TerminalUpgrade
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  └─ Tests
│  │  │  │  │     ├─ elements.ts
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     ├─ LoadingBubbles.tsx
│  │  │  │  │     ├─ TestDetails
│  │  │  │  │     │  ├─ elements.ts
│  │  │  │  │     │  ├─ ErrorDetails
│  │  │  │  │     │  │  └─ index.tsx
│  │  │  │  │     │  ├─ index.tsx
│  │  │  │  │     │  └─ TestBlock
│  │  │  │  │     │     ├─ elements.ts
│  │  │  │  │     │     ├─ index.tsx
│  │  │  │  │     │     └─ TestName
│  │  │  │  │     │        ├─ elements.ts
│  │  │  │  │     │        └─ index.tsx
│  │  │  │  │     ├─ TestElement
│  │  │  │  │     │  ├─ elements.ts
│  │  │  │  │     │  └─ index.tsx
│  │  │  │  │     ├─ TestOverview
│  │  │  │  │     │  ├─ elements.ts
│  │  │  │  │     │  └─ index.tsx
│  │  │  │  │     ├─ TestProgressBar
│  │  │  │  │     │  ├─ elements.ts
│  │  │  │  │     │  └─ index.tsx
│  │  │  │  │     ├─ TestSummary
│  │  │  │  │     │  ├─ elements.ts
│  │  │  │  │     │  └─ index.tsx
│  │  │  │  │     └─ TestSummaryText
│  │  │  │  │        ├─ elements.ts
│  │  │  │  │        └─ index.tsx
│  │  │  │  └─ Editor
│  │  │  │     ├─ elements.js
│  │  │  │     └─ index.js
│  │  │  ├─ PrivacyStatus
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ PrivacyStatus.tsx
│  │  │  │  └─ UnlistedIcon.tsx
│  │  │  ├─ SignInModal.tsx
│  │  │  ├─ StripeMessages
│  │  │  │  ├─ DraftsLimit.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ PaymentPending.tsx
│  │  │  │  ├─ RestrictedSandbox.tsx
│  │  │  │  ├─ RestrictedSandboxes.tsx
│  │  │  │  ├─ UpgradeSSEToV2.tsx
│  │  │  │  └─ UsageLimitMessageStripe.tsx
│  │  │  ├─ SubscribeForm
│  │  │  │  ├─ CheckoutForm
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ index.tsx
│  │  │  ├─ SubTitle.ts
│  │  │  ├─ TeamAvatar
│  │  │  │  ├─ index.ts
│  │  │  │  └─ TeamAvatar.tsx
│  │  │  ├─ Title.ts
│  │  │  ├─ TypescriptIcon.tsx
│  │  │  ├─ UploadProgress
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ UploadProgress.tsx
│  │  │  ├─ UserSearchInput
│  │  │  │  ├─ index.ts
│  │  │  │  └─ UserSearchInput.tsx
│  │  │  ├─ VercelLogo.tsx
│  │  │  ├─ WorkspaceSelect
│  │  │  │  ├─ index.ts
│  │  │  │  └─ WorkspaceSelect.tsx
│  │  │  └─ WorkspaceSetup
│  │  │     ├─ elements.ts
│  │  │     ├─ index.ts
│  │  │     ├─ Layout.tsx
│  │  │     ├─ StepHeader.tsx
│  │  │     ├─ steps
│  │  │     │  ├─ Addons.tsx
│  │  │     │  ├─ ChangePlan.tsx
│  │  │     │  ├─ Create.tsx
│  │  │     │  ├─ FAQ.tsx
│  │  │     │  ├─ Finalize.tsx
│  │  │     │  ├─ Payment.tsx
│  │  │     │  ├─ PlanOptions.tsx
│  │  │     │  ├─ Plans.tsx
│  │  │     │  └─ SelectWorkspace.tsx
│  │  │     ├─ Summary.tsx
│  │  │     ├─ types.ts
│  │  │     └─ WorkspaceSetup.tsx
│  │  ├─ constants.ts
│  │  ├─ custom.d.ts
│  │  ├─ graphql
│  │  │  ├─ client.ts
│  │  │  ├─ introspection-result.ts
│  │  │  ├─ schema.graphql
│  │  │  └─ types.ts
│  │  ├─ index.d.ts
│  │  ├─ index.html
│  │  ├─ index.js
│  │  ├─ overmind
│  │  │  ├─ actions.ts
│  │  │  ├─ effects
│  │  │  │  ├─ algoliaSearch.ts
│  │  │  │  ├─ analytics.ts
│  │  │  │  ├─ api
│  │  │  │  │  ├─ apiFactory.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ types.ts
│  │  │  │  ├─ browser.ts
│  │  │  │  ├─ browserExtension.ts
│  │  │  │  ├─ codesandboxApi.ts
│  │  │  │  ├─ connection.ts
│  │  │  │  ├─ deployment
│  │  │  │  │  ├─ githubPages.ts
│  │  │  │  │  ├─ netlify.ts
│  │  │  │  │  └─ vercel.ts
│  │  │  │  ├─ executor.ts
│  │  │  │  ├─ flows.ts
│  │  │  │  ├─ git
│  │  │  │  │  ├─ export-to-github.ts
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ gql
│  │  │  │  │  ├─ collaborators
│  │  │  │  │  │  ├─ fragments.ts
│  │  │  │  │  │  ├─ mutations.ts
│  │  │  │  │  │  ├─ queries.ts
│  │  │  │  │  │  └─ subscriptions.ts
│  │  │  │  │  ├─ comments
│  │  │  │  │  │  ├─ fragments.ts
│  │  │  │  │  │  ├─ mutations.ts
│  │  │  │  │  │  ├─ queries.ts
│  │  │  │  │  │  └─ subscriptions.ts
│  │  │  │  │  ├─ dashboard
│  │  │  │  │  │  ├─ fragments.ts
│  │  │  │  │  │  ├─ mutations.ts
│  │  │  │  │  │  └─ queries.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ notifications
│  │  │  │  │  │  ├─ fragments.ts
│  │  │  │  │  │  ├─ mutations.ts
│  │  │  │  │  │  └─ queries.ts
│  │  │  │  │  ├─ sidebar
│  │  │  │  │  │  ├─ fragments.ts
│  │  │  │  │  │  └─ queries.ts
│  │  │  │  │  └─ teams
│  │  │  │  │     └─ queries.ts
│  │  │  │  ├─ http.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ jsZip.ts
│  │  │  │  ├─ live
│  │  │  │  │  ├─ clients.test.ts
│  │  │  │  │  ├─ clients.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ ot
│  │  │  │  │     └─ client.ts
│  │  │  │  ├─ moduleRecover.ts
│  │  │  │  ├─ notifications.ts
│  │  │  │  ├─ notificationToast.ts
│  │  │  │  ├─ prettyfier.ts
│  │  │  │  ├─ preview.ts
│  │  │  │  ├─ router.ts
│  │  │  │  ├─ settingsStore.ts
│  │  │  │  ├─ sse.ts
│  │  │  │  ├─ stripe.ts
│  │  │  │  ├─ themes.ts
│  │  │  │  ├─ utils
│  │  │  │  │  ├─ greensock.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ sandbox.ts
│  │  │  │  ├─ vscode
│  │  │  │  │  ├─ composeMenuAppTree.ts
│  │  │  │  │  ├─ constants.ts
│  │  │  │  │  ├─ extensionHostWorker
│  │  │  │  │  │  ├─ bootstrappers
│  │  │  │  │  │  │  ├─ client-ext-host.ts
│  │  │  │  │  │  │  ├─ container-ext-host.ts
│  │  │  │  │  │  │  ├─ generic-1.ts
│  │  │  │  │  │  │  ├─ generic-2.ts
│  │  │  │  │  │  │  ├─ svelte-worker.ts
│  │  │  │  │  │  │  ├─ ts-extension.ts
│  │  │  │  │  │  │  └─ vue-worker.ts
│  │  │  │  │  │  ├─ common
│  │  │  │  │  │  │  ├─ fs.ts
│  │  │  │  │  │  │  └─ global.ts
│  │  │  │  │  │  ├─ services
│  │  │  │  │  │  │  ├─ searchService.ts
│  │  │  │  │  │  │  └─ WebsocketLSP.ts
│  │  │  │  │  │  └─ workers
│  │  │  │  │  │     ├─ ext-host-worker.ts
│  │  │  │  │  │     └─ generic-worker.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ initializers.ts
│  │  │  │  │  ├─ keyCodes.ts
│  │  │  │  │  ├─ Linter.ts
│  │  │  │  │  ├─ LinterWorker
│  │  │  │  │  │  ├─ .eslintignore
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  ├─ monkeypatch-babel-eslint.js
│  │  │  │  │  │  ├─ package.json
│  │  │  │  │  │  ├─ vue
│  │  │  │  │  │  │  ├─ default-vue-2-config.ts
│  │  │  │  │  │  │  ├─ default-vue-3-config.ts
│  │  │  │  │  │  │  └─ index.js
│  │  │  │  │  │  └─ yarn.lock
│  │  │  │  │  ├─ metadata.ts
│  │  │  │  │  ├─ ModelsHandler.ts
│  │  │  │  │  ├─ SandboxFsSync
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  ├─ private-type-fetch.ts
│  │  │  │  │  │  └─ utils.ts
│  │  │  │  │  ├─ theme-cache.ts
│  │  │  │  │  ├─ utils.ts
│  │  │  │  │  ├─ vscode-script-loader.ts
│  │  │  │  │  └─ Workbench.ts
│  │  │  │  └─ zip
│  │  │  │     ├─ create-zip
│  │  │  │     │  ├─ create-react-app
│  │  │  │     │  │  ├─ files.zip
│  │  │  │     │  │  └─ index.ts
│  │  │  │     │  ├─ create-react-app-typescript
│  │  │  │     │  │  ├─ files.zip
│  │  │  │     │  │  └─ index.ts
│  │  │  │     │  ├─ full
│  │  │  │     │  │  └─ index.ts
│  │  │  │     │  ├─ index.ts
│  │  │  │     │  ├─ preact-cli
│  │  │  │     │  │  ├─ files.zip
│  │  │  │     │  │  └─ index.ts
│  │  │  │     │  └─ vue-cli
│  │  │  │     │     ├─ files.zip
│  │  │  │     │     └─ index.ts
│  │  │  │     └─ index.ts
│  │  │  ├─ factories.ts
│  │  │  ├─ index.ts
│  │  │  ├─ internalActions.ts
│  │  │  ├─ modals.ts
│  │  │  ├─ namespaces
│  │  │  │  ├─ checkout
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ constants.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ comments
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ constants.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ dashboard
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ internalActions.ts
│  │  │  │  │  ├─ state.ts
│  │  │  │  │  ├─ types.ts
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ deployment
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ internalActions.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ editor
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ internalActions.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ files
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ internalActions.ts
│  │  │  │  ├─ git
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ internalActions.ts
│  │  │  │  │  ├─ state.ts
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ live
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ internalActions.ts
│  │  │  │  │  ├─ liveMessageOperators.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ preferences
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ preview
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ profile
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ server
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ sidebar
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  ├─ userNotifications
│  │  │  │  │  ├─ actions.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ internalActions.ts
│  │  │  │  │  └─ state.ts
│  │  │  │  └─ workspace
│  │  │  │     ├─ actions.ts
│  │  │  │     ├─ index.ts
│  │  │  │     └─ state.ts
│  │  │  ├─ Provider.ts
│  │  │  ├─ state.ts
│  │  │  └─ utils
│  │  │     ├─ auth.ts
│  │  │     ├─ comments.ts
│  │  │     ├─ common.ts
│  │  │     ├─ event-to-transform.test.ts
│  │  │     ├─ event-to-transform.ts
│  │  │     ├─ files.ts
│  │  │     ├─ items.ts
│  │  │     ├─ main-module.ts
│  │  │     ├─ parse-configurations.ts
│  │  │     ├─ pushToAirtable.ts
│  │  │     ├─ pushToFront.ts
│  │  │     ├─ resolve-module-wrapped.ts
│  │  │     ├─ sandbox.ts
│  │  │     ├─ server.ts
│  │  │     ├─ team.ts
│  │  │     └─ vercel.ts
│  │  ├─ overmind.png
│  │  ├─ pages
│  │  │  ├─ CLI
│  │  │  │  ├─ DevToken.tsx
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ PreviewToken.tsx
│  │  │  │  └─ Prompt
│  │  │  │     ├─ elements.ts
│  │  │  │     └─ index.tsx
│  │  │  ├─ CliInstructions
│  │  │  │  ├─ elements.ts
│  │  │  │  └─ index.tsx
│  │  │  ├─ common
│  │  │  │  ├─ ErrorBoundary
│  │  │  │  │  ├─ CodeSadbox
│  │  │  │  │  │  ├─ buildCrashReport.ts
│  │  │  │  │  │  ├─ CodeSadbox.tsx
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  └─ Sadbox.tsx
│  │  │  │  │  ├─ ErrorBoundary.tsx
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ types.ts
│  │  │  │  ├─ GithubIntegration
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ HTML5BackendWithFolderSupport
│  │  │  │  │  ├─ html-dir-content
│  │  │  │  │  │  ├─ file-list.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ utils.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ LikeHeart
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ MaybeTooltip.tsx
│  │  │  │  ├─ Modals
│  │  │  │  │  ├─ AccountDeletion
│  │  │  │  │  │  ├─ DeletedConfirmation.tsx
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ AddPreset
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ Common
│  │  │  │  │  │  └─ Alert.tsx
│  │  │  │  │  ├─ CropThumbnail
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ DeleteDeploymentModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ DeletePreset
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ DeleteProfileSandboxModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ DeleteSandboxModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ DeploymentModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ EditPresets
│  │  │  │  │  │  ├─ CodeMirrorWrapper.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  ├─ EmptyTrash
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ ExportGitHubModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ FeedbackModal
│  │  │  │  │  │  ├─ Feedback.tsx
│  │  │  │  │  │  ├─ getBrowser.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ ForkServerModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ GenericAlertModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ GithubPagesLogs
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ LiveSessionEnded
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ LiveSessionRestricted
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ LiveSessionVersionMismatch
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ MinimumPrivacyModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ MoveSandboxFolderModal
│  │  │  │  │  │  ├─ DirectoryPicker
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ SandboxesItem
│  │  │  │  │  │  │  │  ├─ elements.js
│  │  │  │  │  │  │  │  ├─ folder-drop-target.js
│  │  │  │  │  │  │  │  ├─ FolderEntry
│  │  │  │  │  │  │  │  │  ├─ CreateFolderEntry.tsx
│  │  │  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  │  └─ queries.ts
│  │  │  │  │  │  │  ├─ TeamsPicker
│  │  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  │  └─ utils
│  │  │  │  │  │  │     ├─ get-child-collections.ts
│  │  │  │  │  │  │     ├─ get-direct-children.js
│  │  │  │  │  │  │     ├─ get-direct-children.test.js
│  │  │  │  │  │  │     ├─ get-most-used-template.js
│  │  │  │  │  │  │     └─ __snapshots__
│  │  │  │  │  │  │        └─ get-direct-children.test.js.snap
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ NetlifyLogs
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ NotFoundBranchModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ PreferencesModal
│  │  │  │  │  │  ├─ Account
│  │  │  │  │  │  │  ├─ EditAccountForm.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ Appearance
│  │  │  │  │  │  │  ├─ EditorTheme
│  │  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ CodeFormatting
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ Prettier.tsx
│  │  │  │  │  │  ├─ Editor
│  │  │  │  │  │  │  ├─ Editor.tsx
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ LinterSettings.tsx
│  │  │  │  │  │  │  └─ VimModeSettings.tsx
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ Experiments
│  │  │  │  │  │  │  ├─ BetaSandboxEditor.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ Integrations
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ GitHubPermissions.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ MailPreferences
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ PreferencesSync
│  │  │  │  │  │  │  ├─ CreateProfile.tsx
│  │  │  │  │  │  │  ├─ Icons.tsx
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ Profile.tsx
│  │  │  │  │  │  │  └─ Profiles.tsx
│  │  │  │  │  │  ├─ Preview
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ Preview.tsx
│  │  │  │  │  │  ├─ SideNavigation
│  │  │  │  │  │  │  └─ elements.js
│  │  │  │  │  │  ├─ SideNavigation.tsx
│  │  │  │  │  │  └─ VSCodePlaceholder
│  │  │  │  │  │     ├─ index.tsx
│  │  │  │  │  │     └─ OpenVSCodeSettingsButton.tsx
│  │  │  │  │  ├─ RecoverFilesModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ SandboxPickerModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ SearchDependenciesModal.tsx
│  │  │  │  │  ├─ SelectSandboxModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ ShareModal
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ getCode.ts
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ SocialShare.tsx
│  │  │  │  │  ├─ SignInForTemplates
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ StorageManagementModal
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ FilesList
│  │  │  │  │  │  │  ├─ AddFileToSandboxButton.tsx
│  │  │  │  │  │  │  ├─ DeleteFileButton.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ SurveyModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ TeamInviteModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ UndoAccountDeletion
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ UndoDeletedConfirmation.tsx
│  │  │  │  │  └─ UploadModal
│  │  │  │  │     └─ index.tsx
│  │  │  │  ├─ Navigation
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ NotFound
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Phew
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ ShowcasePreview
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ UserMenu
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ VercelIntegration.tsx
│  │  │  ├─ Dashboard
│  │  │  │  ├─ Components
│  │  │  │  │  ├─ Branch
│  │  │  │  │  │  ├─ BranchCard.tsx
│  │  │  │  │  │  ├─ BranchListItem.tsx
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ types.ts
│  │  │  │  │  ├─ Breadcrumbs
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ Carousel
│  │  │  │  │  │  └─ Carousel.tsx
│  │  │  │  │  ├─ CommunitySandbox
│  │  │  │  │  │  ├─ AnonymousAvatar.tsx
│  │  │  │  │  │  ├─ CommunitySandboxCard.tsx
│  │  │  │  │  │  ├─ CommunitySandboxListItem.tsx
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ TemplateIcon.tsx
│  │  │  │  │  │  └─ types.ts
│  │  │  │  │  ├─ EmptyPage
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ Filters
│  │  │  │  │  │  ├─ FilterOptions
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ SortOptions
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  └─ ViewOptions
│  │  │  │  │  │     └─ index.tsx
│  │  │  │  │  ├─ Folder
│  │  │  │  │  │  ├─ CreateFolder.tsx
│  │  │  │  │  │  ├─ FolderCard.tsx
│  │  │  │  │  │  ├─ FolderListItem.tsx
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  └─ types.ts
│  │  │  │  │  ├─ Header
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ Repository
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ RepositoryCard.tsx
│  │  │  │  │  │  ├─ RepositoryListItem.tsx
│  │  │  │  │  │  └─ types.ts
│  │  │  │  │  ├─ Sandbox
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ NewMasterSandbox.tsx
│  │  │  │  │  │  ├─ SandboxBadge.tsx
│  │  │  │  │  │  ├─ SandboxCard.tsx
│  │  │  │  │  │  ├─ SandboxListItem.tsx
│  │  │  │  │  │  ├─ TemplateIcon.tsx
│  │  │  │  │  │  ├─ types.ts
│  │  │  │  │  │  ├─ useImageBrightness.ts
│  │  │  │  │  │  └─ useSandboxThumbnail.tsx
│  │  │  │  │  ├─ Selection
│  │  │  │  │  │  ├─ ContextMenu.tsx
│  │  │  │  │  │  ├─ ContextMenus
│  │  │  │  │  │  │  ├─ BranchMenu.tsx
│  │  │  │  │  │  │  ├─ CommunitySandboxMenu.tsx
│  │  │  │  │  │  │  ├─ ContainerMenu.tsx
│  │  │  │  │  │  │  ├─ FolderMenu.tsx
│  │  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  │  ├─ MasterMenu.tsx
│  │  │  │  │  │  │  ├─ MultiItemMenu.tsx
│  │  │  │  │  │  │  ├─ RepositoryMenu.tsx
│  │  │  │  │  │  │  └─ SandboxMenu.tsx
│  │  │  │  │  │  ├─ DragPreview.tsx
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ shared
│  │  │  │  │  │  ├─ ActionCard.tsx
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ InstallGHAppStripe.tsx
│  │  │  │  │  │  ├─ ReadOnlyRepoDisclaimer.tsx
│  │  │  │  │  │  ├─ RestrictedImportDisclaimer.tsx
│  │  │  │  │  │  ├─ RestrictedPublicReposImport.tsx
│  │  │  │  │  │  └─ StyledCard.tsx
│  │  │  │  │  ├─ Skeleton
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  └─ SolidSkeleton.tsx
│  │  │  │  │  ├─ SuggestionsRow
│  │  │  │  │  │  └─ SuggestionsRow.tsx
│  │  │  │  │  ├─ SyncedSandbox
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ SyncedSandboxCard.tsx
│  │  │  │  │  │  └─ SyncedSandboxListItem.tsx
│  │  │  │  │  └─ VariableGrid
│  │  │  │  │     ├─ constants.ts
│  │  │  │  │     └─ index.tsx
│  │  │  │  ├─ Content
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ routes
│  │  │  │  │  │  ├─ Deleted
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ Discover
│  │  │  │  │  │  │  ├─ Album.tsx
│  │  │  │  │  │  │  ├─ CommunitySearch.tsx
│  │  │  │  │  │  │  ├─ contants.ts
│  │  │  │  │  │  │  ├─ Curate.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ Drafts
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ Liked
│  │  │  │  │  │  │  ├─ EmptyLikes.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ MyContributions
│  │  │  │  │  │  │  ├─ EmptyContributions.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ Recent
│  │  │  │  │  │  │  ├─ Banners
│  │  │  │  │  │  │  │  ├─ FreeUpgradeBanner.tsx
│  │  │  │  │  │  │  │  ├─ LegacyProConvertBanner.tsx
│  │  │  │  │  │  │  │  ├─ types.ts
│  │  │  │  │  │  │  │  └─ UBBWelcomeBanner.tsx
│  │  │  │  │  │  │  ├─ DocumentationRow.tsx
│  │  │  │  │  │  │  ├─ EmptyRecent.tsx
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ InstructionsRow.tsx
│  │  │  │  │  │  │  ├─ OpenSourceRow.tsx
│  │  │  │  │  │  │  ├─ RecentContent.tsx
│  │  │  │  │  │  │  ├─ RecentHeader.tsx
│  │  │  │  │  │  │  └─ TopBanner.tsx
│  │  │  │  │  │  ├─ Repositories
│  │  │  │  │  │  │  ├─ EmptyRepositories.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ RepositoryBranches
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ Sandboxes
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ useFilteredItems.ts
│  │  │  │  │  │  ├─ Search
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ searchItems.ts
│  │  │  │  │  │  ├─ Shared
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ SyncedSandboxes
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ useFilteredItems.ts
│  │  │  │  │  │  └─ Templates
│  │  │  │  │  │     └─ index.tsx
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ Header
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ queries.ts
│  │  │  │  ├─ Sidebar
│  │  │  │  │  ├─ constants.ts
│  │  │  │  │  ├─ ContextMenu.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ NestableRowItem.tsx
│  │  │  │  │  ├─ RowItem.tsx
│  │  │  │  │  └─ utils.tsx
│  │  │  │  ├─ types.ts
│  │  │  │  └─ utils
│  │  │  │     ├─ dnd.ts
│  │  │  │     ├─ get-child-collections.js
│  │  │  │     ├─ get-direct-children.js
│  │  │  │     ├─ get-direct-children.test.js
│  │  │  │     ├─ get-most-used-template.js
│  │  │  │     └─ __snapshots__
│  │  │  │        └─ get-direct-children.test.js.snap
│  │  │  ├─ DevAuth
│  │  │  │  ├─ elements.ts
│  │  │  │  └─ index.tsx
│  │  │  ├─ DuplicateAccount
│  │  │  │  └─ index.tsx
│  │  │  ├─ elements.ts
│  │  │  ├─ GitHub
│  │  │  │  ├─ elements.ts
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ Live
│  │  │  │  ├─ Error
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ RoomNotFoundError.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ NotAuthenticated.tsx
│  │  │  ├─ MobileAuth
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ Prompt
│  │  │  │     ├─ elements.ts
│  │  │  │     └─ index.tsx
│  │  │  ├─ PreviewAuth
│  │  │  │  └─ index.tsx
│  │  │  ├─ Profile
│  │  │  │  ├─ AllSandboxes.tsx
│  │  │  │  ├─ constants.ts
│  │  │  │  ├─ ContextMenu.tsx
│  │  │  │  ├─ Header.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ LikedSandboxes.tsx
│  │  │  │  ├─ MinimumPrivacy.tsx
│  │  │  │  ├─ PinnedSandboxes.tsx
│  │  │  │  ├─ ProfileCard.tsx
│  │  │  │  ├─ SandboxCard.tsx
│  │  │  │  ├─ SandboxPicker
│  │  │  │  │  ├─ FolderCard.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ SandboxCard.tsx
│  │  │  │  ├─ SearchedSandboxes.tsx
│  │  │  │  └─ ShowcaseSandbox.tsx
│  │  │  ├─ Sandbox
│  │  │  │  ├─ Editor
│  │  │  │  │  ├─ Content
│  │  │  │  │  │  ├─ EditorToast.tsx
│  │  │  │  │  │  ├─ elements.js
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ prevent-gesture-scroll.js
│  │  │  │  │  │  ├─ Preview
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ ResponsiveWrapper
│  │  │  │  │  │  │     ├─ elements.tsx
│  │  │  │  │  │  │     ├─ Icons.tsx
│  │  │  │  │  │  │     ├─ index.tsx
│  │  │  │  │  │  │     ├─ InstallExtensionBanner.tsx
│  │  │  │  │  │  │     ├─ PresetMenu.tsx
│  │  │  │  │  │  │     ├─ PreviewCommentWrapper.tsx
│  │  │  │  │  │  │     ├─ ResizeHandles.tsx
│  │  │  │  │  │  │     └─ types.ts
│  │  │  │  │  │  ├─ Tabs
│  │  │  │  │  │  │  ├─ ConsoleIcon.js
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ ModuleTab
│  │  │  │  │  │  │  │  ├─ elements.js
│  │  │  │  │  │  │  │  └─ index.js
│  │  │  │  │  │  │  ├─ preview.svg
│  │  │  │  │  │  │  ├─ PreviewIcon.js
│  │  │  │  │  │  │  ├─ Tab
│  │  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  │  └─ index.js
│  │  │  │  │  │  │  └─ TabContainer
│  │  │  │  │  │  │     └─ index.js
│  │  │  │  │  │  ├─ utils.test.ts
│  │  │  │  │  │  ├─ utils.ts
│  │  │  │  │  │  └─ __snapshots__
│  │  │  │  │  │     └─ utils.test.ts.snap
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  ├─ FixedSignInBanner.tsx
│  │  │  │  │  ├─ ForkFrozenSandboxModal
│  │  │  │  │  │  ├─ ForkFrozenSandboxModal.tsx
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  ├─ Header
│  │  │  │  │  │  ├─ Actions.tsx
│  │  │  │  │  │  ├─ AppMenu
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ formatMenuData.ts
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  └─ SubMenu.tsx
│  │  │  │  │  │  ├─ CollaboratorHeads
│  │  │  │  │  │  │  ├─ CollaboratorHeads.tsx
│  │  │  │  │  │  │  └─ index.ts
│  │  │  │  │  │  ├─ Collaborators
│  │  │  │  │  │  │  ├─ AddCollaboratorForm.tsx
│  │  │  │  │  │  │  ├─ ButtonActions.tsx
│  │  │  │  │  │  │  ├─ Collaborator.tsx
│  │  │  │  │  │  │  ├─ CollaboratorList.tsx
│  │  │  │  │  │  │  ├─ Collaborators.tsx
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ icons.tsx
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ OnBoarding.tsx
│  │  │  │  │  │  │  └─ PermissionSelect.tsx
│  │  │  │  │  │  ├─ ForkButton
│  │  │  │  │  │  │  ├─ ForkButton.tsx
│  │  │  │  │  │  │  └─ index.ts
│  │  │  │  │  │  ├─ icons.tsx
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ PrivacyTooltip
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  ├─ icons.tsx
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  ├─ SandboxName
│  │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  │  └─ WorkspaceName
│  │  │  │  │  │     ├─ index.ts
│  │  │  │  │  │     └─ WorkspaceName.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ Navigation
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  ├─ icons.tsx
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ Skeleton
│  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ utils
│  │  │  │  │  │  └─ get-vscode-theme.js
│  │  │  │  │  └─ Workspace
│  │  │  │  │     ├─ Chat
│  │  │  │  │     │  └─ index.tsx
│  │  │  │  │     ├─ elements.ts
│  │  │  │  │     ├─ Files
│  │  │  │  │     │  ├─ DirectoryEntry
│  │  │  │  │     │  │  ├─ DirectoryChildren
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  └─ ModuleEntry.tsx
│  │  │  │  │     │  │  ├─ DirectoryEntryModal
│  │  │  │  │     │  │  │  └─ index.tsx
│  │  │  │  │     │  │  ├─ elements.tsx
│  │  │  │  │     │  │  ├─ Entry
│  │  │  │  │     │  │  │  ├─ EditIcons
│  │  │  │  │     │  │  │  │  ├─ elements.js
│  │  │  │  │     │  │  │  │  └─ index.js
│  │  │  │  │     │  │  │  ├─ elements.ts
│  │  │  │  │     │  │  │  ├─ EntryIcons
│  │  │  │  │     │  │  │  │  ├─ elements.ts
│  │  │  │  │     │  │  │  │  ├─ getIconURL.ts
│  │  │  │  │     │  │  │  │  └─ index.tsx
│  │  │  │  │     │  │  │  ├─ EntryTitle
│  │  │  │  │     │  │  │  │  ├─ elements.js
│  │  │  │  │     │  │  │  │  └─ index.js
│  │  │  │  │     │  │  │  ├─ EntryTitleInput
│  │  │  │  │     │  │  │  │  ├─ elements.tsx
│  │  │  │  │     │  │  │  │  └─ index.tsx
│  │  │  │  │     │  │  │  └─ index.tsx
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  └─ validateTitle.js
│  │  │  │  │     │  └─ index.tsx
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     ├─ screens
│  │  │  │  │     │  ├─ AI
│  │  │  │  │     │  │  └─ index.tsx
│  │  │  │  │     │  ├─ Comments
│  │  │  │  │     │  │  ├─ AddComment.tsx
│  │  │  │  │     │  │  ├─ API.tsx
│  │  │  │  │     │  │  ├─ Comment.tsx
│  │  │  │  │     │  │  ├─ components
│  │  │  │  │     │  │  │  ├─ AvatarBlock.tsx
│  │  │  │  │     │  │  │  ├─ EditComment.tsx
│  │  │  │  │     │  │  │  ├─ GlobalStyles.tsx
│  │  │  │  │     │  │  │  └─ MultiComment.tsx
│  │  │  │  │     │  │  ├─ Dialog
│  │  │  │  │     │  │  │  ├─ BrowserIcons.tsx
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  ├─ PreviewScreenshot.tsx
│  │  │  │  │     │  │  │  ├─ Reply.tsx
│  │  │  │  │     │  │  │  └─ use-scroll-top.tsx
│  │  │  │  │     │  │  └─ index.tsx
│  │  │  │  │     │  ├─ ConfigurationFiles
│  │  │  │  │     │  │  ├─ Icons.tsx
│  │  │  │  │     │  │  └─ index.tsx
│  │  │  │  │     │  ├─ Deployment
│  │  │  │  │     │  │  ├─ GithubPages
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  └─ Info.tsx
│  │  │  │  │     │  │  ├─ icons.tsx
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  ├─ Netlify.tsx
│  │  │  │  │     │  │  ├─ NotLoggedIn.tsx
│  │  │  │  │     │  │  ├─ NotOwner.tsx
│  │  │  │  │     │  │  └─ Vercel
│  │  │  │  │     │  │     ├─ elements.ts
│  │  │  │  │     │  │     └─ index.tsx
│  │  │  │  │     │  ├─ Docker
│  │  │  │  │     │  │  └─ index.tsx
│  │  │  │  │     │  ├─ Explorer
│  │  │  │  │     │  │  ├─ Dependencies
│  │  │  │  │     │  │  │  ├─ AddDependency.tsx
│  │  │  │  │     │  │  │  ├─ Dependency
│  │  │  │  │     │  │  │  │  ├─ BundleSizes.tsx
│  │  │  │  │     │  │  │  │  └─ index.tsx
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  └─ useKeys.ts
│  │  │  │  │     │  │  ├─ ExternalResources
│  │  │  │  │     │  │  │  ├─ google-fonts.ts
│  │  │  │  │     │  │  │  └─ index.tsx
│  │  │  │  │     │  │  ├─ Files
│  │  │  │  │     │  │  │  ├─ DirectoryEntry
│  │  │  │  │     │  │  │  │  ├─ DirectoryChildren
│  │  │  │  │     │  │  │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  │  │  └─ ModuleEntry.tsx
│  │  │  │  │     │  │  │  │  ├─ DirectoryEntryModal
│  │  │  │  │     │  │  │  │  │  └─ index.tsx
│  │  │  │  │     │  │  │  │  ├─ elements.tsx
│  │  │  │  │     │  │  │  │  ├─ Entry
│  │  │  │  │     │  │  │  │  │  ├─ EditIcons
│  │  │  │  │     │  │  │  │  │  │  ├─ elements.js
│  │  │  │  │     │  │  │  │  │  │  ├─ ErrorBoundary.tsx
│  │  │  │  │     │  │  │  │  │  │  └─ index.js
│  │  │  │  │     │  │  │  │  │  ├─ EntryIcons
│  │  │  │  │     │  │  │  │  │  │  ├─ elements.ts
│  │  │  │  │     │  │  │  │  │  │  ├─ folder.svg
│  │  │  │  │     │  │  │  │  │  │  ├─ folderOpen.svg
│  │  │  │  │     │  │  │  │  │  │  ├─ GetIconURL.js
│  │  │  │  │     │  │  │  │  │  │  └─ index.tsx
│  │  │  │  │     │  │  │  │  │  ├─ FileInput.tsx
│  │  │  │  │     │  │  │  │  │  └─ index.tsx
│  │  │  │  │     │  │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  │  └─ validateTitle.js
│  │  │  │  │     │  │  │  ├─ icons.tsx
│  │  │  │  │     │  │  │  └─ index.tsx
│  │  │  │  │     │  │  └─ index.tsx
│  │  │  │  │     │  ├─ GitHub
│  │  │  │  │     │  │  ├─ Changes.tsx
│  │  │  │  │     │  │  ├─ CommitForm.tsx
│  │  │  │  │     │  │  ├─ components
│  │  │  │  │     │  │  │  ├─ ClosedPr.tsx
│  │  │  │  │     │  │  │  ├─ CommitText.tsx
│  │  │  │  │     │  │  │  ├─ ConflictButtons.tsx
│  │  │  │  │     │  │  │  ├─ ConflictPRBase.tsx
│  │  │  │  │     │  │  │  ├─ ConflictsSource.tsx
│  │  │  │  │     │  │  │  ├─ ConflictText.tsx
│  │  │  │  │     │  │  │  ├─ Loading.tsx
│  │  │  │  │     │  │  │  └─ MergedPr.tsx
│  │  │  │  │     │  │  ├─ CreateRepo.tsx
│  │  │  │  │     │  │  ├─ GithubLogin.tsx
│  │  │  │  │     │  │  ├─ Icons.tsx
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  ├─ LinkSandbox.tsx
│  │  │  │  │     │  │  ├─ NotLoggedIn.tsx
│  │  │  │  │     │  │  ├─ NotOwner.tsx
│  │  │  │  │     │  │  ├─ types.ts
│  │  │  │  │     │  │  └─ utils
│  │  │  │  │     │  │     ├─ getConflictIcon.tsx
│  │  │  │  │     │  │     ├─ getConflictsText.tsx
│  │  │  │  │     │  │     └─ getConflictType.ts
│  │  │  │  │     │  ├─ Live
│  │  │  │  │     │  │  ├─ icons.tsx
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  ├─ LiveNow
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  ├─ Timer.tsx
│  │  │  │  │     │  │  │  └─ User.tsx
│  │  │  │  │     │  │  ├─ NotLive
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  ├─ NotOwner.tsx
│  │  │  │  │     │  │  │  └─ Owner.tsx
│  │  │  │  │     │  │  └─ NotLoggedIn.tsx
│  │  │  │  │     │  ├─ NotOwnedSandboxInfo
│  │  │  │  │     │  │  ├─ BookmarkTemplateButton
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  ├─ mutations.ts
│  │  │  │  │     │  │  │  └─ queries.ts
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  └─ Summary.tsx
│  │  │  │  │     │  ├─ ProjectInfo
│  │  │  │  │     │  │  ├─ Config.tsx
│  │  │  │  │     │  │  ├─ Delete.tsx
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  ├─ Permissions.tsx
│  │  │  │  │     │  │  └─ Summary
│  │  │  │  │     │  │     ├─ EditSummary.tsx
│  │  │  │  │     │  │     ├─ index.tsx
│  │  │  │  │     │  │     ├─ TemplateConfig
│  │  │  │  │     │  │     │  ├─ elements.ts
│  │  │  │  │     │  │     │  └─ index.tsx
│  │  │  │  │     │  │     └─ ThumbnailEdit.tsx
│  │  │  │  │     │  ├─ Search
│  │  │  │  │     │  │  ├─ components
│  │  │  │  │     │  │  │  ├─ FileFilters.tsx
│  │  │  │  │     │  │  │  ├─ Result.tsx
│  │  │  │  │     │  │  │  ├─ SearchOptions.tsx
│  │  │  │  │     │  │  │  └─ TabButton.tsx
│  │  │  │  │     │  │  ├─ icons.tsx
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  └─ search.worker.ts
│  │  │  │  │     │  ├─ Server
│  │  │  │  │     │  │  ├─ Control.tsx
│  │  │  │  │     │  │  ├─ EnvVars
│  │  │  │  │     │  │  │  ├─ index.tsx
│  │  │  │  │     │  │  │  └─ VarForm.tsx
│  │  │  │  │     │  │  ├─ Icons.tsx
│  │  │  │  │     │  │  ├─ index.tsx
│  │  │  │  │     │  │  ├─ Ports.tsx
│  │  │  │  │     │  │  ├─ Status.tsx
│  │  │  │  │     │  │  └─ Tasks.tsx
│  │  │  │  │     │  └─ VSCode
│  │  │  │  │     │     └─ index.tsx
│  │  │  │  │     ├─ social-icons.tsx
│  │  │  │  │     └─ socials.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ OnBoarding
│  │  │  │  │  ├─ Card.tsx
│  │  │  │  │  ├─ config.ts
│  │  │  │  │  ├─ Counter.tsx
│  │  │  │  │  ├─ data.ts
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ Navigation.tsx
│  │  │  │  └─ SearchDependencies
│  │  │  │     ├─ Dependency.tsx
│  │  │  │     ├─ Footer.tsx
│  │  │  │     ├─ icons.tsx
│  │  │  │     ├─ index.tsx
│  │  │  │     └─ SearchBox.tsx
│  │  │  ├─ SandpackSecret
│  │  │  │  └─ index.tsx
│  │  │  ├─ Search
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ Filters
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  ├─ Filter
│  │  │  │  │  │  ├─ elements.js
│  │  │  │  │  │  ├─ index.js
│  │  │  │  │  │  └─ Sort.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ ResultInfo
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ Results
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  └─ search.ts
│  │  │  ├─ SignIn
│  │  │  │  ├─ ChooseProvider.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ Button.tsx
│  │  │  │  │  └─ DuplicateAccount.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ Onboarding.tsx
│  │  │  │  ├─ SignIn.tsx
│  │  │  │  └─ types.ts
│  │  │  ├─ SignInAuth
│  │  │  │  └─ index.js
│  │  │  ├─ SignOut
│  │  │  │  └─ index.tsx
│  │  │  ├─ SignUp
│  │  │  │  └─ index.tsx
│  │  │  ├─ Standalone
│  │  │  │  └─ index.tsx
│  │  │  ├─ TeamInvitation
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ queries.ts
│  │  │  │  └─ TeamInvitation.tsx
│  │  │  ├─ VercelAuth
│  │  │  │  └─ index.js
│  │  │  ├─ VSCodeAuth
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ Prompt
│  │  │  │     ├─ elements.ts
│  │  │  │     └─ index.tsx
│  │  │  └─ WorkspaceFlows
│  │  │     ├─ CreateWorkspace.tsx
│  │  │     ├─ index.ts
│  │  │     └─ UpgradeWorkspace.tsx
│  │  ├─ split-pane.css
│  │  └─ utils
│  │     ├─ authorization.ts
│  │     ├─ blocker.ts
│  │     ├─ codemirror
│  │     │  └─ index.js
│  │     ├─ corrections.ts
│  │     ├─ currency.ts
│  │     ├─ dateTime.test.ts
│  │     ├─ dateTime.ts
│  │     ├─ escape.ts
│  │     ├─ executor-manager.ts
│  │     ├─ fuzzyMatchGithubToCsb.ts
│  │     ├─ get-type.ts
│  │     ├─ getNetlifyConfig.js
│  │     ├─ history.ts
│  │     ├─ inject-resources-for-export.ts
│  │     ├─ Loadable.tsx
│  │     ├─ monaco-index-converter.js
│  │     ├─ pluralize.ts
│  │     ├─ prettify.js
│  │     ├─ private-registry.ts
│  │     ├─ quotes.ts
│  │     ├─ template-color.ts
│  │     └─ test
│  │        └─ render.js
│  ├─ banner.js
│  ├─ embed
│  │  ├─ components
│  │  │  ├─ Actions
│  │  │  │  ├─ elements.js
│  │  │  │  ├─ icons.js
│  │  │  │  └─ index.js
│  │  │  ├─ App
│  │  │  │  ├─ elements.js
│  │  │  │  └─ index.js
│  │  │  ├─ Content
│  │  │  │  ├─ CodeEditor.tsx
│  │  │  │  ├─ elements.ts
│  │  │  │  ├─ ImageViewer
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ Monaco
│  │  │  │  │  ├─ define-theme.js
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  ├─ enable-combi-emmet.js
│  │  │  │  │  ├─ enable-emmet.js
│  │  │  │  │  ├─ event-to-transform.js
│  │  │  │  │  ├─ event-to-transform.test.js
│  │  │  │  │  ├─ grammars
│  │  │  │  │  │  ├─ configure-tokenizer.js
│  │  │  │  │  │  ├─ set-grammars.js
│  │  │  │  │  │  └─ tmGrammars
│  │  │  │  │  │     ├─ css.json.tmLanguage
│  │  │  │  │  │     ├─ html.json.tmLanguage
│  │  │  │  │  │     └─ TypeScriptReact.tmLanguage
│  │  │  │  │  ├─ index.js
│  │  │  │  │  ├─ live-decorations.js
│  │  │  │  │  ├─ mode.ts
│  │  │  │  │  ├─ MonacoReactComponent.js
│  │  │  │  │  ├─ settings.js
│  │  │  │  │  └─ workers
│  │  │  │  │     └─ fetch-dependency-typings.js
│  │  │  │  ├─ MonacoDiff
│  │  │  │  │  └─ index.js
│  │  │  │  └─ play.svg
│  │  │  ├─ legacy
│  │  │  │  └─ Header
│  │  │  │     ├─ elements.js
│  │  │  │     ├─ icons.js
│  │  │  │     ├─ index.js
│  │  │  │     └─ Link.js
│  │  │  ├─ Sidebar
│  │  │  │  ├─ AvatarBlock
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ Dependencies
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ elements.js
│  │  │  │  ├─ ExternalResources
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  └─ index.js
│  │  │  │  ├─ FileTree
│  │  │  │  │  ├─ elements.js
│  │  │  │  │  ├─ icons.js
│  │  │  │  │  ├─ index.js
│  │  │  │  │  └─ utils.js
│  │  │  │  ├─ index.js
│  │  │  │  ├─ SandboxInfo
│  │  │  │  │  ├─ elements.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ Section
│  │  │  │     ├─ elements.js
│  │  │  │     └─ index.js
│  │  │  └─ SplitPane
│  │  │     ├─ elements.js
│  │  │     └─ index.js
│  │  ├─ index.html
│  │  ├─ index.js
│  │  ├─ library.js
│  │  ├─ logo.svg
│  │  ├─ theme
│  │  │  ├─ index.js
│  │  │  └─ tokens.js
│  │  └─ util
│  │     ├─ constants.js
│  │     └─ mobile.ts
│  ├─ sandbox
│  │  ├─ boilerplates
│  │  │  ├─ default-boilerplates.ts
│  │  │  └─ index.ts
│  │  ├─ codesandbox-overlay
│  │  │  └─ index.ts
│  │  ├─ compile.ts
│  │  ├─ eval
│  │  │  ├─ errors
│  │  │  │  ├─ module-error.ts
│  │  │  │  └─ module-warning.ts
│  │  │  ├─ index.ts
│  │  │  ├─ presets
│  │  │  │  ├─ angular-cli
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ babel-repl
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ create-react-app
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ utils
│  │  │  │  │  │  ├─ createRefreshEntry.ts
│  │  │  │  │  │  ├─ initLatestDevTools.ts
│  │  │  │  │  │  └─ initLegacyDevTools.ts
│  │  │  │  │  └─ utils.ts
│  │  │  │  ├─ custom
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ cxjs
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ dojo
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ transpilers
│  │  │  │  │     └─ style.ts
│  │  │  │  ├─ parcel
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ transpilers
│  │  │  │  │     ├─ html-transpiler.ts
│  │  │  │  │     ├─ html-worker.ts
│  │  │  │  │     └─ is-url.ts
│  │  │  │  ├─ preact-cli
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ preset.ts
│  │  │  │  │  ├─ transpilers
│  │  │  │  │  │  └─ async.ts
│  │  │  │  │  └─ v8.ts
│  │  │  │  ├─ reason
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ reason-remap.ts
│  │  │  │  ├─ solid
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ stencil
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ svelte
│  │  │  │  │  └─ index.ts
│  │  │  │  └─ vue-cli
│  │  │  │     ├─ index.ts
│  │  │  │     ├─ v2.ts
│  │  │  │     └─ v3.ts
│  │  │  ├─ tests
│  │  │  │  ├─ jest-lite.test.js
│  │  │  │  ├─ jest-lite.ts
│  │  │  │  ├─ run-circus.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ transpilers
│  │  │  │  ├─ angular2-template
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ babel
│  │  │  │  │  ├─ ast
│  │  │  │  │  │  ├─ ast-node-utils.ts
│  │  │  │  │  │  ├─ big-file.js
│  │  │  │  │  │  ├─ collect-dependencies.test.ts
│  │  │  │  │  │  ├─ collect-dependencies.ts
│  │  │  │  │  │  ├─ convert-esmodule.test.ts
│  │  │  │  │  │  ├─ convert-esmodule.ts
│  │  │  │  │  │  ├─ generator-jsx.ts
│  │  │  │  │  │  ├─ generator.ts
│  │  │  │  │  │  ├─ printer.test.ts
│  │  │  │  │  │  ├─ rewrite-meta.test.ts
│  │  │  │  │  │  ├─ rewrite-meta.ts
│  │  │  │  │  │  ├─ syntax-info.test.ts
│  │  │  │  │  │  ├─ syntax-info.ts
│  │  │  │  │  │  ├─ syntax.ts
│  │  │  │  │  │  ├─ utils.ts
│  │  │  │  │  │  └─ __snapshots__
│  │  │  │  │  │     ├─ convert-esmodule.test.ts.snap
│  │  │  │  │  │     ├─ printer.test.ts.snap
│  │  │  │  │  │     └─ rewrite-meta.test.ts.snap
│  │  │  │  │  ├─ babel-parser.ts
│  │  │  │  │  ├─ babel-version.ts
│  │  │  │  │  ├─ check.test.ts
│  │  │  │  │  ├─ check.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ worker
│  │  │  │  │     ├─ babel-worker.ts
│  │  │  │  │     ├─ dynamic-download.ts
│  │  │  │  │     ├─ evaluate.ts
│  │  │  │  │     ├─ get-prefixed-name.ts
│  │  │  │  │     ├─ get-require-statements.test.ts
│  │  │  │  │     ├─ get-require-statements.ts
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ plugins
│  │  │  │  │     │  ├─ babel-plugin-detective.ts
│  │  │  │  │     │  ├─ babel-plugin-dynamic-css-modules.ts
│  │  │  │  │     │  ├─ babel-plugin-rename-imports.ts
│  │  │  │  │     │  ├─ babel-plugin-transform-prevent-infinite-loops.ts
│  │  │  │  │     │  └─ wrap-listener.ts
│  │  │  │  │     ├─ simple-get-require-statements.test.ts
│  │  │  │  │     ├─ simple-get-require-statements.ts
│  │  │  │  │     ├─ utils
│  │  │  │  │     │  ├─ babelTypes.ts
│  │  │  │  │     │  ├─ error-mock.ts
│  │  │  │  │     │  ├─ macrosPatch.ts
│  │  │  │  │     │  ├─ normalize-name.test.ts
│  │  │  │  │     │  ├─ normalize-name.ts
│  │  │  │  │     │  ├─ remap-babel-hack.ts
│  │  │  │  │     │  └─ resolvePatch.ts
│  │  │  │  │     └─ __snapshots__
│  │  │  │  │        └─ get-require-statements.test.ts.snap
│  │  │  │  ├─ base64
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ mimes.json
│  │  │  │  ├─ binary
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ coffee
│  │  │  │  │  ├─ coffee-worker.ts
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ json
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ less
│  │  │  │  │  ├─ file-manager.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ less-worker.ts
│  │  │  │  ├─ noop
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ postcss
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ loader.ts
│  │  │  │  ├─ pug
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ pug-worker.ts
│  │  │  │  ├─ raw
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ react-refresh
│  │  │  │  │  └─ refresh-transpiler.ts
│  │  │  │  ├─ react-svg
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ reason
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ sass
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ worker
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ resolver.test.js
│  │  │  │  │     ├─ resolver.ts
│  │  │  │  │     ├─ sass-worker.ts
│  │  │  │  │     └─ utils
│  │  │  │  │        └─ imports.ts
│  │  │  │  ├─ stencil
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ stencil-worker.ts
│  │  │  │  ├─ style
│  │  │  │  │  ├─ get-modules.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ utils
│  │  │  │  │     ├─ insert-css.ts
│  │  │  │  │     └─ to-definition.ts
│  │  │  │  ├─ stylus
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ stylus-worker.ts
│  │  │  │  ├─ svelte
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ svelte-worker.ts
│  │  │  │  ├─ svgr
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ transpiler.ts
│  │  │  │  ├─ typescript
│  │  │  │  │  ├─ get-require-statements.test.ts
│  │  │  │  │  ├─ get-require-statements.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ typescript-worker.ts
│  │  │  │  │  └─ __snapshots__
│  │  │  │  │     └─ get-require-statements.test.ts.snap
│  │  │  │  ├─ utils
│  │  │  │  │  ├─ binary.ts
│  │  │  │  │  ├─ fs.ts
│  │  │  │  │  ├─ get-source-map.ts
│  │  │  │  │  ├─ worker-error-handler.ts
│  │  │  │  │  └─ worker-warning-handler.ts
│  │  │  │  ├─ vue
│  │  │  │  │  └─ v2
│  │  │  │  │     ├─ component-normalizer.js
│  │  │  │  │     ├─ css-loader
│  │  │  │  │     │  ├─ client
│  │  │  │  │     │  │  └─ css-base.js
│  │  │  │  │     │  ├─ get-modules.ts
│  │  │  │  │     │  ├─ index.ts
│  │  │  │  │     │  └─ loader.ts
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ loader.ts
│  │  │  │  │     ├─ parser.js
│  │  │  │  │     ├─ selector
│  │  │  │  │     │  ├─ index.ts
│  │  │  │  │     │  └─ loader.ts
│  │  │  │  │     ├─ style-compiler
│  │  │  │  │     │  ├─ index.ts
│  │  │  │  │     │  ├─ loader.ts
│  │  │  │  │     │  └─ plugins
│  │  │  │  │     │     ├─ scope-id.js
│  │  │  │  │     │     └─ trim.js
│  │  │  │  │     ├─ style-loader
│  │  │  │  │     │  ├─ addStylesClient.js
│  │  │  │  │     │  ├─ index.ts
│  │  │  │  │     │  ├─ listToStyles.js
│  │  │  │  │     │  └─ loader.ts
│  │  │  │  │     ├─ template-compiler
│  │  │  │  │     │  ├─ index.ts
│  │  │  │  │     │  ├─ loader.ts
│  │  │  │  │     │  └─ modules
│  │  │  │  │     │     ├─ transform-require.ts
│  │  │  │  │     │     └─ transform-srcset.ts
│  │  │  │  │     └─ utils
│  │  │  │  │        └─ gen-id.js
│  │  │  │  └─ worker-transpiler
│  │  │  │     ├─ child-handler.ts
│  │  │  │     ├─ transpiler.ts
│  │  │  │     └─ worker-manager.ts
│  │  │  └─ utils
│  │  │     ├─ get-dependencies.ts
│  │  │     ├─ get-dependency-name.test.ts
│  │  │     ├─ get-dependency-name.ts
│  │  │     ├─ is-dependency-path.ts
│  │  │     ├─ is-es-module.test.ts
│  │  │     └─ is-es-module.ts
│  │  ├─ external-resources.ts
│  │  ├─ index.html
│  │  ├─ index.ts
│  │  ├─ LICENSE
│  │  ├─ resize-event-listener.ts
│  │  ├─ startup.ts
│  │  └─ status-screen
│  │     ├─ index.ts
│  │     ├─ indicator-screen.html
│  │     ├─ loading-screen.html
│  │     ├─ overlay-manager.ts
│  │     ├─ run-on-click-screen.html
│  │     └─ run-on-click.ts
│  └─ watermark-button.js
├─ static
│  ├─ fonts
│  │  ├─ everett
│  │  │  ├─ everett.css
│  │  │  ├─ TWKEverett-Light-web.ttf
│  │  │  ├─ TWKEverett-Light-web.woff
│  │  │  ├─ TWKEverett-Light-web.woff2
│  │  │  ├─ TWKEverett-Medium-web.ttf
│  │  │  ├─ TWKEverett-Medium-web.woff
│  │  │  ├─ TWKEverett-Medium-web.woff2
│  │  │  ├─ TWKEverett-Regular-web.ttf
│  │  │  ├─ TWKEverett-Regular-web.woff
│  │  │  └─ TWKEverett-Regular-web.woff2
│  │  ├─ inter
│  │  │  ├─ Inter-Black.woff
│  │  │  ├─ Inter-Black.woff2
│  │  │  ├─ Inter-BlackItalic.woff
│  │  │  ├─ Inter-BlackItalic.woff2
│  │  │  ├─ Inter-Bold.woff
│  │  │  ├─ Inter-Bold.woff2
│  │  │  ├─ Inter-BoldItalic.woff
│  │  │  ├─ Inter-BoldItalic.woff2
│  │  │  ├─ Inter-ExtraBold.woff
│  │  │  ├─ Inter-ExtraBold.woff2
│  │  │  ├─ Inter-ExtraBoldItalic.woff
│  │  │  ├─ Inter-ExtraBoldItalic.woff2
│  │  │  ├─ Inter-ExtraLight-BETA.woff
│  │  │  ├─ Inter-ExtraLight-BETA.woff2
│  │  │  ├─ Inter-ExtraLightItalic-BETA.woff
│  │  │  ├─ Inter-ExtraLightItalic-BETA.woff2
│  │  │  ├─ Inter-italic.var.woff2
│  │  │  ├─ Inter-Italic.woff
│  │  │  ├─ Inter-Italic.woff2
│  │  │  ├─ Inter-Light-BETA.woff
│  │  │  ├─ Inter-Light-BETA.woff2
│  │  │  ├─ Inter-LightItalic-BETA.woff
│  │  │  ├─ Inter-LightItalic-BETA.woff2
│  │  │  ├─ Inter-Medium.woff
│  │  │  ├─ Inter-Medium.woff2
│  │  │  ├─ Inter-MediumItalic.woff
│  │  │  ├─ Inter-MediumItalic.woff2
│  │  │  ├─ Inter-Regular.woff
│  │  │  ├─ Inter-Regular.woff2
│  │  │  ├─ Inter-SemiBold.woff
│  │  │  ├─ Inter-SemiBold.woff2
│  │  │  ├─ Inter-SemiBoldItalic.woff
│  │  │  ├─ Inter-SemiBoldItalic.woff2
│  │  │  ├─ Inter-Thin-BETA.woff
│  │  │  ├─ Inter-Thin-BETA.woff2
│  │  │  ├─ Inter-ThinItalic-BETA.woff
│  │  │  ├─ Inter-ThinItalic-BETA.woff2
│  │  │  ├─ Inter-upright.var.woff2
│  │  │  ├─ inter.css
│  │  │  └─ Inter.var.woff2
│  │  ├─ monolisa.css
│  │  ├─ seti.woff
│  │  ├─ TWKEverett-Medium-web.ttf
│  │  └─ TWKEverett-Medium-web.woff
│  ├─ img
│  │  ├─ banner.png
│  │  ├─ collaboration-sticker.png
│  │  ├─ comment.svg
│  │  ├─ contributions-branch.png
│  │  ├─ default-avatar.png
│  │  ├─ default-sandbox-thumbnail.png
│  │  ├─ discover-banner-playjs.png
│  │  ├─ discover-banner-search.png
│  │  ├─ email
│  │  │  ├─ csb-projects-logo-white.png
│  │  │  ├─ discord.png
│  │  │  ├─ email-ext-icon.png
│  │  │  ├─ email-inspector-icon.png
│  │  │  ├─ email-ios-icon.png
│  │  │  ├─ email-pullrequest-icon.png
│  │  │  ├─ github.png
│  │  │  ├─ logo.png
│  │  │  ├─ projects-screenshot-01.jpg
│  │  │  ├─ spectrum.png
│  │  │  ├─ twitter.png
│  │  │  └─ youtube.png
│  │  ├─ explore.png
│  │  ├─ livesession-onboarding.jpeg
│  │  ├─ logo.png
│  │  ├─ onboarding
│  │  │  ├─ deploy.jpg
│  │  │  ├─ deps.jpg
│  │  │  ├─ ending.jpg
│  │  │  ├─ import.jpg
│  │  │  ├─ invite.jpg
│  │  │  └─ multiplayer.jpg
│  │  ├─ play-codesandbox.svg
│  │  ├─ projects-banner.png
│  │  ├─ terminal_upgrade_screenshot.png
│  │  ├─ thumbnails
│  │  │  ├─ blog.png
│  │  │  ├─ blog_dashboard-intro.png
│  │  │  ├─ blog_github-app.png
│  │  │  ├─ docs_getting-started.png
│  │  │  ├─ docs_ipad.png
│  │  │  ├─ docs_vscode-extension.png
│  │  │  ├─ page_contributions.png
│  │  │  ├─ page_repositories.png
│  │  │  ├─ page_shared.png
│  │  │  ├─ recent_intro.png
│  │  │  ├─ video_1-click-pr.png
│  │  │  ├─ video_auto-deps.png
│  │  │  ├─ video_cloud-sandboxes.png
│  │  │  ├─ video_code-reviews.png
│  │  │  ├─ video_command-palette.png
│  │  │  ├─ video_contribution-branches.png
│  │  │  └─ youtube.png
│  │  └─ vue-logo.png
│  └─ js
│     ├─ babel.6.26.min.js
│     ├─ babel.7.21.8.js
│     ├─ babel.7.21.8.min.js
│     ├─ browserified-pug.0.1.0.min.js
│     ├─ coffeescript.2.3.2.js
│     ├─ eslint.4.1.0.min.js
│     ├─ jsdom-16.3.0.min.js
│     ├─ less-4.1.2.min.js
│     ├─ less-4.1.2.min.js.map
│     ├─ less.min.js
│     ├─ less.min.js.map
│     ├─ prettier
│     │  ├─ 1.15.1
│     │  │  ├─ parser-angular.js
│     │  │  ├─ parser-babylon.js
│     │  │  ├─ parser-flow.js
│     │  │  ├─ parser-glimmer.js
│     │  │  ├─ parser-graphql.js
│     │  │  ├─ parser-html.js
│     │  │  ├─ parser-markdown.js
│     │  │  ├─ parser-postcss.js
│     │  │  ├─ parser-typescript.js
│     │  │  ├─ parser-yaml.js
│     │  │  └─ standalone.js
│     │  ├─ 1.16.4
│     │  │  ├─ parser-angular.js
│     │  │  ├─ parser-babylon.js
│     │  │  ├─ parser-flow.js
│     │  │  ├─ parser-glimmer.js
│     │  │  ├─ parser-graphql.js
│     │  │  ├─ parser-html.js
│     │  │  ├─ parser-markdown.js
│     │  │  ├─ parser-postcss.js
│     │  │  ├─ parser-typescript.js
│     │  │  ├─ parser-yaml.js
│     │  │  └─ standalone.js
│     │  ├─ 2.0.5
│     │  │  ├─ parser-angular.js
│     │  │  ├─ parser-babel.js
│     │  │  ├─ parser-flow.js
│     │  │  ├─ parser-glimmer.js
│     │  │  ├─ parser-graphql.js
│     │  │  ├─ parser-html.js
│     │  │  ├─ parser-markdown.js
│     │  │  ├─ parser-postcss.js
│     │  │  ├─ parser-typescript.js
│     │  │  ├─ parser-yaml.js
│     │  │  └─ standalone.js
│     │  ├─ worker-1.15.1.js
│     │  ├─ worker-1.16.4.js
│     │  ├─ worker-2.0.5.js
│     │  └─ worker.js
│     └─ stylus.min.js
├─ tsconfig.base.json
├─ tsconfig.check.json
├─ tsconfig.json
├─ tsconfig.strictNullChecks.json
├─ types
│  └─ global-fetch.d.ts
├─ www
│  ├─ 0.babel-transpiler.7a79b91c.worker.js
│  ├─ 0.babel-transpiler.7a79b91c.worker.js.map
│  ├─ 0.client-ext-host-worker.1444e506.worker.js
│  ├─ 0.client-ext-host-worker.1444e506.worker.js.map
│  ├─ 0.container-ext-host-worker.5c8d4a0d.worker.js
│  ├─ 0.container-ext-host-worker.5c8d4a0d.worker.js.map
│  ├─ 0.monaco-linter.2c7e8c5d.worker.js
│  ├─ 0.monaco-linter.2c7e8c5d.worker.js.map
│  ├─ 0.sass-transpiler.c01a28c4.worker.js
│  ├─ 0.sass-transpiler.c01a28c4.worker.js.map
│  ├─ 1.babel-transpiler.7a79b91c.worker.js
│  ├─ 1.babel-transpiler.7a79b91c.worker.js.map
│  ├─ a12b8babb6ff436fe619.worker.js
│  ├─ a12b8babb6ff436fe619.worker.js.map
│  ├─ app.html
│  ├─ babel-plugin-jsx-pragmatic.babel-transpiler.7a79b91c.worker.js
│  ├─ babel-plugin-jsx-pragmatic.babel-transpiler.7a79b91c.worker.js.map
│  ├─ babel-plugin-transform-vue-jsx.babel-transpiler.7a79b91c.worker.js
│  ├─ babel-plugin-transform-vue-jsx.babel-transpiler.7a79b91c.worker.js.map
│  ├─ babel-transpiler.7a79b91c.worker.js
│  ├─ babel-transpiler.7a79b91c.worker.js.map
│  ├─ client-ext-host-worker.1444e506.worker.js
│  ├─ client-ext-host-worker.1444e506.worker.js.map
│  ├─ coffee-transpiler.3cdc6b26.worker.js
│  ├─ coffee-transpiler.3cdc6b26.worker.js.map
│  ├─ container-ext-host-worker.5c8d4a0d.worker.js
│  ├─ container-ext-host-worker.5c8d4a0d.worker.js.map
│  ├─ dynamic-worker.28e84eb7.worker.js
│  ├─ dynamic-worker.28e84eb7.worker.js.map
│  ├─ embed.html
│  ├─ file-manifest.json
│  ├─ frame.html
│  ├─ less-transpiler.3d40a6c3.worker.js
│  ├─ less-transpiler.3d40a6c3.worker.js.map
│  ├─ monaco-linter.2c7e8c5d.worker.js
│  ├─ monaco-linter.2c7e8c5d.worker.js.map
│  ├─ monaco-typings-ata.1ade573d.worker.js
│  ├─ monaco-typings-ata.1ade573d.worker.js.map
│  ├─ parcel-html-transpiler.44afacb7.worker.js
│  ├─ parcel-html-transpiler.44afacb7.worker.js.map
│  ├─ public
│  ├─ pug-transpiler.6d85ee3d.worker.js
│  ├─ pug-transpiler.6d85ee3d.worker.js.map
│  ├─ sandbox-service-worker.js
│  ├─ sass-transpiler.c01a28c4.worker.js
│  ├─ sass-transpiler.c01a28c4.worker.js.map
│  ├─ service-worker.js
│  ├─ static
│  │  ├─ css
│  │  │  ├─ app.e18910f2.css
│  │  │  ├─ app.e18910f2.css.map
│  │  │  ├─ common.54db9762.chunk.css
│  │  │  ├─ common.54db9762.chunk.css.map
│  │  │  ├─ default~app~embed.5ab743ff.chunk.css
│  │  │  ├─ default~app~embed.5ab743ff.chunk.css.map
│  │  │  ├─ vendors~app.3aef3826.chunk.css
│  │  │  ├─ vendors~app.3aef3826.chunk.css.map
│  │  │  ├─ vendors~codemirror-editor.13d6b186.chunk.css
│  │  │  ├─ vendors~codemirror-editor.13d6b186.chunk.css.map
│  │  │  ├─ vendors~page-search.2b9119ba.chunk.css
│  │  │  └─ vendors~page-search.2b9119ba.chunk.css.map
│  │  ├─ js
│  │  │  ├─ 0.681043136.chunk.js
│  │  │  ├─ 0.681043136.chunk.js.map
│  │  │  ├─ 1.390d5cd6d.chunk.js
│  │  │  ├─ 1.390d5cd6d.chunk.js.map
│  │  │  ├─ 10.f11a1492d.chunk.js
│  │  │  ├─ 10.f11a1492d.chunk.js.map
│  │  │  ├─ 11.aacb3b594.chunk.js
│  │  │  ├─ 11.aacb3b594.chunk.js.map
│  │  │  ├─ 12.b8fff9f22.chunk.js
│  │  │  ├─ 12.b8fff9f22.chunk.js.map
│  │  │  ├─ 13.a643c228a.chunk.js
│  │  │  ├─ 13.a643c228a.chunk.js.map
│  │  │  ├─ 14.2f6d5e7f1.chunk.js
│  │  │  ├─ 14.2f6d5e7f1.chunk.js.map
│  │  │  ├─ 15.b8fb9c267.chunk.js
│  │  │  ├─ 15.b8fb9c267.chunk.js.map
│  │  │  ├─ 2.77529c16f.chunk.js
│  │  │  ├─ 2.77529c16f.chunk.js.map
│  │  │  ├─ 3.732764890.chunk.js
│  │  │  ├─ 3.732764890.chunk.js.map
│  │  │  ├─ 4.a87895b63.chunk.js
│  │  │  ├─ 4.a87895b63.chunk.js.map
│  │  │  ├─ 5.029c574e1.chunk.js
│  │  │  ├─ 5.029c574e1.chunk.js.map
│  │  │  ├─ 6.5df64e83c.chunk.js
│  │  │  ├─ 6.5df64e83c.chunk.js.map
│  │  │  ├─ 7.14bd680f6.chunk.js
│  │  │  ├─ 7.14bd680f6.chunk.js.map
│  │  │  ├─ 8.ae1ec3a24.chunk.js
│  │  │  ├─ 8.ae1ec3a24.chunk.js.map
│  │  │  ├─ 9.2553176dc.chunk.js
│  │  │  ├─ 9.2553176dc.chunk.js.map
│  │  │  ├─ app.31c093a67.js
│  │  │  ├─ app.31c093a67.js.map
│  │  │  ├─ banner.d9cb10a38.js
│  │  │  ├─ banner.d9cb10a38.js.map
│  │  │  ├─ codemirror-editor.145b26c7e.chunk.js
│  │  │  ├─ codemirror-editor.145b26c7e.chunk.js.map
│  │  │  ├─ codemirror-handlebars.bcfe72cae.chunk.js
│  │  │  ├─ codemirror-handlebars.bcfe72cae.chunk.js.map
│  │  │  ├─ codemirror-html.1f5b84dfd.chunk.js
│  │  │  ├─ codemirror-html.1f5b84dfd.chunk.js.map
│  │  │  ├─ codemirror-sass.8ee527c9e.chunk.js
│  │  │  ├─ codemirror-sass.8ee527c9e.chunk.js.map
│  │  │  ├─ codemirror-tern.f6405a281.chunk.js
│  │  │  ├─ codemirror-tern.f6405a281.chunk.js.map
│  │  │  ├─ common-sandbox.09f563264.chunk.js
│  │  │  ├─ common-sandbox.09f563264.chunk.js.map
│  │  │  ├─ common.db4be00ea.chunk.js
│  │  │  ├─ common.db4be00ea.chunk.js.map
│  │  │  ├─ create-react-app-typescript-zip.74d26f44f.chunk.js
│  │  │  ├─ create-react-app-typescript-zip.74d26f44f.chunk.js.map
│  │  │  ├─ create-react-app-zip.3fb14c1e7.chunk.js
│  │  │  ├─ create-react-app-zip.3fb14c1e7.chunk.js.map
│  │  │  ├─ css-loader.64087c7f5.chunk.js
│  │  │  ├─ css-loader.64087c7f5.chunk.js.map
│  │  │  ├─ css-modules-loader-core.d45aa4709.chunk.js
│  │  │  ├─ css-modules-loader-core.d45aa4709.chunk.js.map
│  │  │  ├─ default~app~embed.0b8e5ba40.chunk.js
│  │  │  ├─ default~app~embed.0b8e5ba40.chunk.js.map
│  │  │  ├─ default~app~embed~sandbox.af86fc9ab.chunk.js
│  │  │  ├─ default~app~embed~sandbox.af86fc9ab.chunk.js.map
│  │  │  ├─ default~app~embed~sandbox~sandbox-startup.3b30c86d6.chunk.js
│  │  │  ├─ default~app~embed~sandbox~sandbox-startup.3b30c86d6.chunk.js.map
│  │  │  ├─ default~app~monaco-editor.43d2d5f33.chunk.js
│  │  │  ├─ default~app~monaco-editor.43d2d5f33.chunk.js.map
│  │  │  ├─ embed.3cc2bef8d.js
│  │  │  ├─ embed.3cc2bef8d.js.map
│  │  │  ├─ export-to-github.0b447b6b8.chunk.js
│  │  │  ├─ export-to-github.0b447b6b8.chunk.js.map
│  │  │  ├─ feedback.423c0e1e8.chunk.js
│  │  │  ├─ feedback.423c0e1e8.chunk.js.map
│  │  │  ├─ full-zip.e2a68e3f8.chunk.js
│  │  │  ├─ full-zip.e2a68e3f8.chunk.js.map
│  │  │  ├─ monaco-editor.c25ffa9bd.chunk.js
│  │  │  ├─ monaco-editor.c25ffa9bd.chunk.js.map
│  │  │  ├─ move-sandbox-modal.84398589a.chunk.js
│  │  │  ├─ move-sandbox-modal.84398589a.chunk.js.map
│  │  │  ├─ page-cli-instructions.6433e4440.chunk.js
│  │  │  ├─ page-cli-instructions.6433e4440.chunk.js.map
│  │  │  ├─ page-cli.9c7234fe2.chunk.js
│  │  │  ├─ page-cli.9c7234fe2.chunk.js.map
│  │  │  ├─ page-client.137195915.chunk.js
│  │  │  ├─ page-client.137195915.chunk.js.map
│  │  │  ├─ page-github.883e7aac2.chunk.js
│  │  │  ├─ page-github.883e7aac2.chunk.js.map
│  │  │  ├─ page-mobile-auth.79935f8e1.chunk.js
│  │  │  ├─ page-mobile-auth.79935f8e1.chunk.js.map
│  │  │  ├─ page-profile.f09f999a8.chunk.js
│  │  │  ├─ page-profile.f09f999a8.chunk.js.map
│  │  │  ├─ page-search.f16c7fdd4.chunk.js
│  │  │  ├─ page-search.f16c7fdd4.chunk.js.map
│  │  │  ├─ page-sign-in.e22241a32.chunk.js
│  │  │  ├─ page-sign-in.e22241a32.chunk.js.map
│  │  │  ├─ page-sign-out.62a1a2a04.chunk.js
│  │  │  ├─ page-sign-out.62a1a2a04.chunk.js.map
│  │  │  ├─ page-signup.8615578fc.chunk.js
│  │  │  ├─ page-signup.8615578fc.chunk.js.map
│  │  │  ├─ page-team-invitation.0fc8cb6fe.chunk.js
│  │  │  ├─ page-team-invitation.0fc8cb6fe.chunk.js.map
│  │  │  ├─ page-vercel.05c86cdcc.chunk.js
│  │  │  ├─ page-vercel.05c86cdcc.chunk.js.map
│  │  │  ├─ phishing-phew.030bc66ca.chunk.js
│  │  │  ├─ phishing-phew.030bc66ca.chunk.js.map
│  │  │  ├─ postcss-compiler.05255e64e.chunk.js
│  │  │  ├─ postcss-compiler.05255e64e.chunk.js.map
│  │  │  ├─ preact-zip.98966a32c.chunk.js
│  │  │  ├─ preact-zip.98966a32c.chunk.js.map
│  │  │  ├─ sandbox-startup.a1064fa6e.js
│  │  │  ├─ sandbox-startup.a1064fa6e.js.map
│  │  │  ├─ sandbox.f9be64331.js
│  │  │  ├─ sandbox.f9be64331.js.map
│  │  │  ├─ vendors~app.b9aa0ecb2.chunk.js
│  │  │  ├─ vendors~app.b9aa0ecb2.chunk.js.map
│  │  │  ├─ vendors~app~codemirror-editor~monaco-editor.cdc4609fc.chunk.js
│  │  │  ├─ vendors~app~codemirror-editor~monaco-editor.cdc4609fc.chunk.js.map
│  │  │  ├─ vendors~app~codemirror-editor~monaco-editor~sandbox.a0a9d9986.chunk.js
│  │  │  ├─ vendors~app~codemirror-editor~monaco-editor~sandbox.a0a9d9986.chunk.js.map
│  │  │  ├─ vendors~app~embed~sandbox-startup.1c90fe343.chunk.js
│  │  │  ├─ vendors~app~embed~sandbox-startup.1c90fe343.chunk.js.map
│  │  │  ├─ vendors~app~monaco-editor.837bd921f.chunk.js
│  │  │  ├─ vendors~app~monaco-editor.837bd921f.chunk.js.map
│  │  │  ├─ vendors~app~sandbox.d07ab9245.chunk.js
│  │  │  ├─ vendors~app~sandbox.d07ab9245.chunk.js.map
│  │  │  ├─ vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue.05f963edb.chunk.js
│  │  │  ├─ vendors~codemirror-css~codemirror-html~codemirror-sass~codemirror-vue.05f963edb.chunk.js.map
│  │  │  ├─ vendors~codemirror-editor.2f5262c80.chunk.js
│  │  │  ├─ vendors~codemirror-editor.2f5262c80.chunk.js.map
│  │  │  ├─ vendors~codemirror-markdown.a2029c291.chunk.js
│  │  │  ├─ vendors~codemirror-markdown.a2029c291.chunk.js.map
│  │  │  ├─ vendors~codemirror-stylus~codemirror-vue.aa43f8435.chunk.js
│  │  │  ├─ vendors~codemirror-stylus~codemirror-vue.aa43f8435.chunk.js.map
│  │  │  ├─ vendors~codemirror-vim.b3517c94d.chunk.js
│  │  │  ├─ vendors~codemirror-vim.b3517c94d.chunk.js.map
│  │  │  ├─ vendors~codemirror-vue.33d6cec92.chunk.js
│  │  │  ├─ vendors~codemirror-vue.33d6cec92.chunk.js.map
│  │  │  ├─ vendors~css-modules-loader-core.4cf00f3a9.chunk.js
│  │  │  ├─ vendors~css-modules-loader-core.4cf00f3a9.chunk.js.map
│  │  │  ├─ vendors~embed.f59a39d58.chunk.js
│  │  │  ├─ vendors~embed.f59a39d58.chunk.js.map
│  │  │  ├─ vendors~monaco-editor.e78610c2c.chunk.js
│  │  │  ├─ vendors~monaco-editor.e78610c2c.chunk.js.map
│  │  │  ├─ vendors~page-search.9549417b7.chunk.js
│  │  │  ├─ vendors~page-search.9549417b7.chunk.js.map
│  │  │  ├─ vendors~postcss-compiler~vue-style-compiler.7615e9809.chunk.js
│  │  │  ├─ vendors~postcss-compiler~vue-style-compiler.7615e9809.chunk.js.map
│  │  │  ├─ vendors~react-devtools-backend.f9bb808e7.chunk.js
│  │  │  ├─ vendors~react-devtools-backend.f9bb808e7.chunk.js.map
│  │  │  ├─ vendors~sandbox.e008a4edf.chunk.js
│  │  │  ├─ vendors~sandbox.e008a4edf.chunk.js.map
│  │  │  ├─ vendors~vue-loader~vue-selector~vue-template-compiler.869041708.chunk.js
│  │  │  ├─ vendors~vue-loader~vue-selector~vue-template-compiler.869041708.chunk.js.map
│  │  │  ├─ vendors~vue-style-compiler.8f51b5006.chunk.js
│  │  │  ├─ vendors~vue-style-compiler.8f51b5006.chunk.js.map
│  │  │  ├─ vendors~vue-template-compiler.a8c77cdee.chunk.js
│  │  │  ├─ vendors~vue-template-compiler.a8c77cdee.chunk.js.map
│  │  │  ├─ vue-loader.36a4d8407.chunk.js
│  │  │  ├─ vue-loader.36a4d8407.chunk.js.map
│  │  │  ├─ vue-selector.91b0cc6f0.chunk.js
│  │  │  ├─ vue-selector.91b0cc6f0.chunk.js.map
│  │  │  ├─ vue-style-compiler.554ed5d1c.chunk.js
│  │  │  ├─ vue-style-compiler.554ed5d1c.chunk.js.map
│  │  │  ├─ vue-template-compiler.b8f7afc7a.chunk.js
│  │  │  ├─ vue-template-compiler.b8f7afc7a.chunk.js.map
│  │  │  ├─ vue-zip.580158210.chunk.js
│  │  │  ├─ vue-zip.580158210.chunk.js.map
│  │  │  ├─ watermark-button.eeb14a97b.js
│  │  │  └─ watermark-button.eeb14a97b.js.map
│  │  └─ media
│  │     ├─ codesandbox.90002c31.svg
│  │     ├─ file.6cbc0ce8.svg
│  │     ├─ folder-open.df474ba4.svg
│  │     ├─ folder.30a30d83.svg
│  │     ├─ folder.31ca7ee0.svg
│  │     ├─ folderOpen.6913563c.svg
│  │     ├─ image.7f836890.svg
│  │     └─ now.a94f1f60.svg
│  ├─ stylus-transpiler.a5f467a1.worker.js
│  ├─ stylus-transpiler.a5f467a1.worker.js.map
│  ├─ sub-dynamic-worker.b2727883.worker.js
│  ├─ sub-dynamic-worker.b2727883.worker.js.map
│  ├─ svelte-transpiler.96490c9e.worker.js
│  ├─ svelte-transpiler.96490c9e.worker.js.map
│  ├─ svelte-worker.f5d3d70e.worker.js
│  ├─ svelte-worker.f5d3d70e.worker.js.map
│  ├─ transform-cx-jsx.babel-transpiler.7a79b91c.worker.js
│  ├─ transform-cx-jsx.babel-transpiler.7a79b91c.worker.js.map
│  ├─ typescript-transpiler.edd003ee.worker.js
│  ├─ typescript-transpiler.edd003ee.worker.js.map
│  ├─ typescript-worker.f5ca6738.worker.js
│  ├─ typescript-worker.f5ca6738.worker.js.map
│  ├─ version.txt
│  ├─ vue-worker.b93bd458.worker.js
│  └─ vue-worker.b93bd458.worker.js.map
└─ __mocks__
   ├─ fileMock.js
   └─ styleMock.js

```