import{a as d,S as f,i as l}from"./assets/vendor-Cip_4kvj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="11580437-1a487efdd1ade7df450dc5ee8",h="https://pixabay.com/api/";function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30};return d.get(h,{params:o}).then(e=>e.data).catch(e=>{throw console.error("❌ Помилка при запиті до Pixabay:",e),e})}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <ul class="info">
        <li class="prop">
          <p class="prop-label">Likes</p>
          <p class="prop-value">${e.likes}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Views</p>
          <p class="prop-value">${e.views}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Comments</p>
          <p class="prop-value">${e.comments}</p>
        </li>
        <li class="prop">
          <p class="prop-label">Downloads</p>
          <p class="prop-value">${e.downloads}</p>
        </li>
      </ul>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function v(){p.classList.remove("hidden")}function w(){p.classList.add("hidden")}const u=document.querySelector(".form"),i=u.querySelector(".search-images-input");u.addEventListener("submit",s=>{s.preventDefault();const o=i.value.trim();if(!o){l.error({message:"Please enter a search query!",position:"topRight"});return}b(),v(),y(o).then(e=>{e.hits.length===0?(i.value="",l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(L(e.hits),i.value="")}).catch(e=>{l.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{setTimeout(()=>{w()},1e3)})});
//# sourceMappingURL=index.js.map
