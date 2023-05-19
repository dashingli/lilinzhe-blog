const e=JSON.parse('{"key":"v-50551fb6","path":"/posts/%E7%AC%94%E8%AE%B0/%E5%89%8D%E7%AB%AF/webpack/WebPack%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"WebPack 基本使用","lang":"zh-CN","frontmatter":{"date":"2022-10-19T00:00:00.000Z","cover":"https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081333831.png","order":1,"tag":["webpack","前端"],"description":"WebPack 基本使用 什么是 webpack webpack 是一个模块打包器。它的主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换（transform）、打包（bundle）或包裹（package）任何资源(resource or asset)。 webpack 将所有模块捆绑在一起，使其运行 重要概念 入口:entry 入口文件是一个 js 文件。默认值是 &nbsp;./src/index.js webpack 通过这个文件内的 import，收集其他模块文件，在通过其他模块文件内的 import 语句，收集其他依赖，构建其内部 &nbsp;依赖图(dependency graph)最后将所有模块文件打包到一起，形成一个整体可运行的代码。 输出:output output 属性告诉 webpack 在哪里输出它所创建的包,主要输出文件的默认是 &nbsp;./dist/main.js ，其他生成文件默认放置在 &nbsp;./dist文件夹中。 加载器:loaders webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。loader可以让 webpack 能够去处理其他类型的文件，并将它们转换为有效 &nbsp;模块，以供应用程序使用，以及被添加到依赖图中。 💡 webpack 的其中一个强大的特性就是能通过&nbsp;`import`导入任何类型的模块（例如&nbsp;`.css`文件） 插件:plugins plugins 选项用于以各种方式自定义 webpack 构建过程 插件页面 模式:mode webpack 有两种工作方式：development（开发模式）和 production（生产模式）。 主要的区别就是 production 模式下，产生的捆绑包（文件）更小，去掉了在运行下无关的注释，空格等等。这样可以加快用户加载代码的速度。","head":[["meta",{"property":"og:url","content":"https://lilinzhe.com/posts/%E7%AC%94%E8%AE%B0/%E5%89%8D%E7%AB%AF/webpack/WebPack%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:title","content":"WebPack 基本使用"}],["meta",{"property":"og:description","content":"WebPack 基本使用 什么是 webpack webpack 是一个模块打包器。它的主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换（transform）、打包（bundle）或包裹（package）任何资源(resource or asset)。 webpack 将所有模块捆绑在一起，使其运行 重要概念 入口:entry 入口文件是一个 js 文件。默认值是 &nbsp;./src/index.js webpack 通过这个文件内的 import，收集其他模块文件，在通过其他模块文件内的 import 语句，收集其他依赖，构建其内部 &nbsp;依赖图(dependency graph)最后将所有模块文件打包到一起，形成一个整体可运行的代码。 输出:output output 属性告诉 webpack 在哪里输出它所创建的包,主要输出文件的默认是 &nbsp;./dist/main.js ，其他生成文件默认放置在 &nbsp;./dist文件夹中。 加载器:loaders webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。loader可以让 webpack 能够去处理其他类型的文件，并将它们转换为有效 &nbsp;模块，以供应用程序使用，以及被添加到依赖图中。 💡 webpack 的其中一个强大的特性就是能通过&nbsp;`import`导入任何类型的模块（例如&nbsp;`.css`文件） 插件:plugins plugins 选项用于以各种方式自定义 webpack 构建过程 插件页面 模式:mode webpack 有两种工作方式：development（开发模式）和 production（生产模式）。 主要的区别就是 production 模式下，产生的捆绑包（文件）更小，去掉了在运行下无关的注释，空格等等。这样可以加快用户加载代码的速度。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081333831.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"WebPack 基本使用"}],["meta",{"property":"article:author","content":"李林哲"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:published_time","content":"2022-10-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebPack 基本使用\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081333831.png\\"],\\"datePublished\\":\\"2022-10-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李林哲\\"}]}"]]},"headers":[{"level":2,"title":"什么是 webpack","slug":"什么是-webpack","link":"#什么是-webpack","children":[]},{"level":2,"title":"重要概念","slug":"重要概念","link":"#重要概念","children":[]},{"level":2,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[]},{"level":2,"title":"配置 webpack","slug":"配置-webpack","link":"#配置-webpack","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.56,"words":1067},"filePathRelative":"posts/笔记/前端/webpack/WebPack基本使用.md","localizedDate":"2022年10月19日","excerpt":"<h1> WebPack 基本使用</h1>\\n<h2> 什么是 webpack</h2>\\n<p>webpack 是一个模块打包器。它的主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换（transform）、打包（bundle）或包裹（package）任何资源(resource or asset)。</p>\\n<p>webpack 将所有模块捆绑在一起，使其运行</p>\\n<h2> 重要概念</h2>\\n<ul>\\n<li>\\n<p>入口:<strong>entry</strong>\\n入口文件是一个 js 文件。默认值是 &nbsp;<code>./src/index.js</code> webpack 通过这个文件内的 import，收集其他模块文件，在通过其他模块文件内的 import 语句，收集其他依赖，构建其内部 &nbsp;<a href=\\"https://webpack.docschina.org/concepts/dependency-graph/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">依赖图(dependency graph)</a>最后将所有模块文件打包到一起，形成一个整体可运行的代码。</p>\\n</li>\\n<li>\\n<p>输出:<strong>output</strong>\\noutput 属性告诉 webpack 在哪里输出它所创建的包,主要输出文件的默认是 &nbsp;<code>./dist/main.js</code>\\n，其他生成文件默认放置在 &nbsp;<code>./dist</code>文件夹中。</p>\\n</li>\\n<li>\\n<p>加载器:<strong>loaders</strong>\\nwebpack <strong>只能理解 JavaScript 和 JSON 文件</strong>，这是 webpack 开箱可用的自带能力。<strong>loader</strong>可以让 webpack 能够去处理其他类型的文件，并将它们转换为有效 &nbsp;<a href=\\"https://webpack.docschina.org/concepts/modules\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">模块</a>，以供应用程序使用，以及被添加到依赖图中。</p>\\n  <aside>\\n  💡 webpack 的其中一个强大的特性就是能通过&nbsp;`import`导入任何类型的模块（例如&nbsp;`.css`文件）\\n  </aside>\\n</li>\\n<li>\\n<p>插件:<strong>plugins</strong>\\n<code>plugins</code> 选项用于以各种方式自定义 webpack 构建过程 <a href=\\"https://webpack.docschina.org/plugins\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">插件页面</a></p>\\n</li>\\n<li>\\n<p>模式:<strong>mode</strong>\\nwebpack 有两种工作方式：development（开发模式）和 production（生产模式）。 主要的区别就是 production 模式下，产生的捆绑包（文件）更小，去掉了在运行下无关的注释，空格等等。这样可以加快用户加载代码的速度。</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
