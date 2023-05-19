import{_ as n,X as e,Y as t,Z as a}from"./framework-b3714b73.js";const o={},i=a(`<h1 id="原型与原型链" tabindex="-1"><a class="header-anchor" href="#原型与原型链" aria-hidden="true">#</a> 原型与原型链</h1><h2 id="为什么不报错" tabindex="-1"><a class="header-anchor" href="#为什么不报错" aria-hidden="true">#</a> 为什么不报错</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么可以运行?我的 obj 里面明明没有 toString 呀?</p><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081015811.png" alt="              在控制台console.dir(obj)打印试试" tabindex="0" loading="lazy"><figcaption> 在控制台console.dir(obj)打印试试</figcaption></figure><pre><code>          在控制台console.dir(obj)打印试试
</code></pre><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081015298.png" alt="            在控制台console.dir(Object)打印试试" tabindex="0" loading="lazy"><figcaption> 在控制台console.dir(Object)打印试试</figcaption></figure><pre><code>        在控制台console.dir(Object)打印试试
</code></pre><p>我们可以看到 obj 里有个隐藏属性<strong>Prototype</strong>,他储存的是 Object.prototype 对象的地址,而 Object.prototype 里是有 toString 方法的.所以 obj.toString()没有报错.</p><h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2><p>XXX.prototype 存储了 XXX 对象的共通属性,这个对象就是原型.</p><h2 id="prototype-和prototype的区别是什么" tabindex="-1"><a class="header-anchor" href="#prototype-和prototype的区别是什么" aria-hidden="true">#</a> prototype 和<strong>Prototype</strong>的区别是什么?</h2><p>两者都存着原型的地址,只不过 prototype 挂在函数上,而<strong>Prototype</strong>挂在每个新生成的对象上</p><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081015057.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure>`,14),s=[i];function r(p,c){return e(),t("div",null,s)}const l=n(o,[["render",r],["__file","原型与原型链.html.vue"]]);export{l as default};
