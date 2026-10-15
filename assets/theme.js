document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('[data-mobile-toggle]');
  const nav=document.querySelector('[data-mobile-nav]');
  if(toggle && nav) toggle.addEventListener('click',()=>{ const open=nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded',open?'true':'false'); toggle.setAttribute('aria-label',open?'Close menu':'Open menu'); });

  document.querySelectorAll('[data-slider]').forEach((slider)=>{
    const track=slider.querySelector('[data-slider-track]');
    if(!track) return;
    const items=[...track.children];
    const prev=slider.querySelector('[data-slider-prev]');
    const next=slider.querySelector('[data-slider-next]');
    const dots=slider.querySelector('[data-slider-dots]');
    const delay=parseInt(slider.dataset.autoplay||'0',10);
    let timer;
    const go=(direction)=>{
      const amount=track.clientWidth;
      track.scrollBy({left:direction*amount,behavior:'smooth'});
    };
    prev?.addEventListener('click',()=>go(-1));
    next?.addEventListener('click',()=>go(1));
    if(dots && items.length>1){
      items.forEach((_,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Go to slide ${i+1}`);b.addEventListener('click',()=>track.scrollTo({left:i*track.clientWidth,behavior:'smooth'}));dots.appendChild(b)});
      const update=()=>{const index=Math.round(track.scrollLeft/Math.max(track.clientWidth,1));dots.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('is-active',i===index))};
      track.addEventListener('scroll',()=>requestAnimationFrame(update)); update();
    }
    if(delay && items.length>1){
      timer=setInterval(()=>{
        const max=track.scrollWidth-track.clientWidth;
        track.scrollTo({left:track.scrollLeft>=max-10?0:track.scrollLeft+track.clientWidth,behavior:'smooth'});
      },delay);
      slider.addEventListener('mouseenter',()=>clearInterval(timer));
      slider.addEventListener('mouseleave',()=>{timer=setInterval(()=>{const max=track.scrollWidth-track.clientWidth;track.scrollTo({left:track.scrollLeft>=max-10?0:track.scrollLeft+track.clientWidth,behavior:'smooth'})},delay)});
    }
  });
});

/* Mogachi Ruch final header interactions */
document.addEventListener('DOMContentLoaded',function(){
  const mobileToggle=document.querySelector('[data-mobile-toggle]');
  const mobileNav=document.querySelector('[data-mobile-nav]');
  const moreWrapper=document.querySelector('[data-more-wrapper]');
  const moreToggle=document.querySelector('[data-more-toggle]');
  const moreMenu=document.querySelector('[data-more-menu]');
  const profileWrapper=document.querySelector('[data-profile-wrapper]');
  const profileToggle=document.querySelector('[data-profile-toggle]');
  const profileMenu=document.querySelector('[data-profile-menu]');
  function closeMore(){if(moreWrapper)moreWrapper.classList.remove('is-open');if(moreToggle)moreToggle.setAttribute('aria-expanded','false');if(moreMenu)moreMenu.setAttribute('aria-hidden','true')}
  function closeProfile(){if(profileWrapper)profileWrapper.classList.remove('is-open');if(profileToggle)profileToggle.setAttribute('aria-expanded','false');if(profileMenu)profileMenu.setAttribute('aria-hidden','true')}
  if(mobileToggle&&mobileNav){mobileToggle.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();const open=!mobileNav.classList.contains('is-open');mobileNav.classList.toggle('is-open',open);mobileToggle.classList.toggle('is-open',open);mobileToggle.setAttribute('aria-expanded',String(open))})}
  if(moreToggle&&moreWrapper&&moreMenu){moreToggle.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();closeProfile();const open=!moreWrapper.classList.contains('is-open');moreWrapper.classList.toggle('is-open',open);moreToggle.setAttribute('aria-expanded',String(open));moreMenu.setAttribute('aria-hidden',String(!open))});moreMenu.addEventListener('click',function(e){e.stopPropagation()})}
  if(profileToggle&&profileWrapper&&profileMenu){profileToggle.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();closeMore();const open=!profileWrapper.classList.contains('is-open');profileWrapper.classList.toggle('is-open',open);profileToggle.setAttribute('aria-expanded',String(open));profileMenu.setAttribute('aria-hidden',String(!open))});profileMenu.addEventListener('click',function(e){e.stopPropagation()})}
  document.addEventListener('click',function(){closeMore();closeProfile()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeMore();closeProfile();if(mobileNav)mobileNav.classList.remove('is-open');if(mobileToggle){mobileToggle.classList.remove('is-open');mobileToggle.setAttribute('aria-expanded','false')}}});
});
