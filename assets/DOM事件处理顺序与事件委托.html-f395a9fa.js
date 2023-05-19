import{_ as n,X as s,Y as a,Z as t}from"./framework-b3714b73.js";const e={},i=t(`<h1 id="dom-事件处理顺序与事件委托" tabindex="-1"><a class="header-anchor" href="#dom-事件处理顺序与事件委托" aria-hidden="true">#</a> DOM 事件处理顺序与事件委托</h1><h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2><h2 id="事件处理的三个阶段" tabindex="-1"><a class="header-anchor" href="#事件处理的三个阶段" aria-hidden="true">#</a> 事件处理的三个阶段</h2><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081054393.png" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ul><li>事件捕获:从<strong>外</strong>向<strong>内</strong>找监听函数</li><li>事件冒泡:从<strong>内</strong>向<strong>外</strong>找监听函数</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081055109.png" alt="            第三个参数不传或传flase,就让fn走冒泡(默认)" tabindex="0" loading="lazy"><figcaption> 第三个参数不传或传flase,就让fn走冒泡(<strong>默认</strong>)</figcaption></figure><pre><code>        第三个参数不传或传flase,就让fn走冒泡(**默认**)
</code></pre><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081055604.png" alt="                     第三个参数传true,就让fn走捕获" tabindex="0" loading="lazy"><figcaption> 第三个参数传true,就让fn走捕获</figcaption></figure><pre><code>                 第三个参数传true,就让fn走捕获
</code></pre><h2 id="冒泡演示" tabindex="-1"><a class="header-anchor" href="#冒泡演示" aria-hidden="true">#</a> 冒泡演示</h2><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081055432.gif" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Document</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        .a{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .div1{
            border-radius: 50%;
            width: 500px;
            height: 500px;
            border:1px solid red;
        }
        .div2{
            border-radius: 50%;
            width: 400px;
            height: 400px;
            border: 1px solid green;
        }
        .div3{
            border-radius: 50%;
            width: 300px;
            height: 300px;
            border: 1px solid blue;
        }
        .color-div1{
            background-color: red;
        }
        .color-div2{
            background-color: green;
        }
        .color-div3{
            background-color: blue;
        }

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div1 a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div2 a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    const div1 = document.querySelector(&#39;.div1&#39;);
    const div2 = document.querySelector(&#39;.div2&#39;);
    const div3 = document.querySelector(&#39;.div3&#39;);
    let n = 1;
    const fn1 = (e) =&gt; {
        const a = e.currentTarget;
        setTimeout(() =&gt;{a.classList.add(&#39;color-div1&#39;);},n*1000)
        n += 1;
    }
    const fn2 = (e) =&gt; {
        const a = e.currentTarget;
        setTimeout(() =&gt;{a.classList.add(&#39;color-div2&#39;);},n*1000)
        n += 1;
    }
    const fn3 = (e) =&gt; {
        const a = e.currentTarget;
        setTimeout(() =&gt;{a.classList.add(&#39;color-div3&#39;);},n*1000)
        n += 1;
    }
    div1.addEventListener(&#39;click&#39;,fn1);
    div2.addEventListener(&#39;click&#39;,fn2);
    *div3.addEventListener(&#39;click&#39;,fn3);*
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="捕获演示" tabindex="-1"><a class="header-anchor" href="#捕获演示" aria-hidden="true">#</a> 捕获演示</h2><figure><img src="https://cdn.jsdelivr.net/gh/dashingli/imageSave@main/img/202305081055904.gif" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">//修改这三行</span>
div1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> fn1<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div2<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> fn2<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div3<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> fn3<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h2><p>事件由于某种原因很难监听自身:</p><ul><li>场景一:要监听 1000 个按钮,不可能一个一个注册事件吧?这个时候监听 1000 个按钮的祖先,然后冒泡时候判断 e.target 是不是这些按钮中的一个.</li><li>场景二:如果要监听的元素开始不存在的话,我们也可以采用同样的办法,监听祖先,然后等触发事件时看看是不是我想要监听的元素.</li></ul><p>这种自身很难监听,委托给祖先的方式,叫事件委托</p>`,20),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(e,[["render",l],["__file","DOM事件处理顺序与事件委托.html.vue"]]);export{d as default};
