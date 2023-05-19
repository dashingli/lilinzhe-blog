import{_ as r,X as t,Y as d,$ as e,a0 as a,a1 as n,Z as l,E as s}from"./framework-b3714b73.js";const c={},h=l('<h1 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h1><h2 id="什么是-ip" tabindex="-1"><a class="header-anchor" href="#什么是-ip" aria-hidden="true">#</a> 什么是 IP</h2><p>IP 为 Internet Protocal,主要约定了两件事情:</p><ol><li>如何定位一台设备</li><li>如何封装数据报文,以跟其他设备交流</li></ol><hr><h2 id="内网-外网" tabindex="-1"><a class="header-anchor" href="#内网-外网" aria-hidden="true">#</a> 内网 &amp;&amp; 外网</h2><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081100958.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><hr><h2 id="端口" tabindex="-1"><a class="header-anchor" href="#端口" aria-hidden="true">#</a> 端口</h2><ul><li><p>一台机器可以提供很多服务,就比如饭店的不同窗口提供不同的饭菜一样.</p></li><li><p>一台机器一共有 65535 个端口(记得很多就行啦)</p><p>HTTP 服务最好使用 ⇒ 80 端口</p><p>HTTPS 服务最好使用 ⇒ 443 端口</p></li><li><p>0 — 1023 端口是留给系统使用的</p></li></ul><hr><h2 id="域名" tabindex="-1"><a class="header-anchor" href="#域名" aria-hidden="true">#</a> 域名</h2>',12),o=e("li",null,"域名是 IP 的别称",-1),p=e("li",null,"一个域名可以对应不同的 IP(负载均衡,尤其大公司访问量大并发高,不可能只搞一台服务器)",-1),u=e("li",null,"一个 IP 可以对应不同域名(共享主机)",-1),m={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"com 为顶级域名",-1),T={href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"www.baidu.com是三级域名",-1),P=l(`<hr><h2 id="dns-domain-name-system" tabindex="-1"><a class="header-anchor" href="#dns-domain-name-system" aria-hidden="true">#</a> DNS <em>Domain Name System</em></h2><p>当你输入域名时,浏览器会向 DNS 服务器询问这个域名所对应的 IP.</p><p>DNS 启到解析域名的作用</p><hr><h2 id="url-1" tabindex="-1"><a class="header-anchor" href="#url-1" aria-hidden="true">#</a> URL</h2><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081100930.png" alt="                  没写端口的话,就是默认端口.HTTPS默认端口443" tabindex="0" loading="lazy"><figcaption> 没写端口的话,就是默认端口.HTTPS默认端口443</figcaption></figure><pre><code>              没写端口的话,就是默认端口.HTTPS默认端口443
</code></pre><hr><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><p><em>HTTP</em> = <em>TCP</em> + <em>IP</em></p><p>HTTP 基于 TCP 和 IP 两个协议</p><hr><h2 id="curl-命令" tabindex="-1"><a class="header-anchor" href="#curl-命令" aria-hidden="true">#</a> curl 命令</h2><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081100459.png" alt="curl是用于在本地计算机与远程服务器之间传输数据的命令行工具。使用curl时您可以使用HTTP，HTTPS， SCP ， SFTP和FTP等协议下载或上传数据" tabindex="0" loading="lazy"><figcaption>curl是用于在本地计算机与远程服务器之间传输数据的命令行工具。使用curl时您可以使用HTTP，HTTPS， SCP ， SFTP和FTP等协议下载或上传数据</figcaption></figure><p>curl 是用于在本地计算机与远程服务器之间传输数据的命令行工具。使用 curl 时您可以使用 HTTP，HTTPS， SCP ， SFTP 和 FTP 等协议下载或上传数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-v</span> https://www.example.com //输出通信的整个过程，用于调试。
<span class="token function">curl</span> <span class="token parameter variable">-s</span> https://www.example.com //将不输出错误和进度信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081101100.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ul><li>过程 <ol><li>URL 会被 curl 工具重写,先请求 DNS 解析后获得 IP</li><li>然后进行 TCP 连接,成功后开始发送 HTTP 请求</li><li>返回请求内容 响应内容</li><li>响应结束后,关闭 TCP 连接</li><li>结束整个过程</li></ol></li></ul>`,19);function _(b,S){const i=s("ExternalLinkIcon");return t(),d("div",null,[h,e("ul",null,[o,p,u,e("li",null,[a("域名层级: "),e("a",m,[a("www.baidu.com"),n(i)]),e("ul",null,[g,e("li",null,[e("a",T,[a("baidu.com"),n(i)]),a(" 是二级域名")]),f])])]),P])}const x=r(c,[["render",_],["__file","URL.html.vue"]]);export{x as default};