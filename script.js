  (function(){
    var header=document.querySelector('header');
    var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>20)};
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();

    var burger=document.getElementById('burger'),links=document.getElementById('navLinks');
    burger.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      burger.classList.toggle('open',open);
      burger.setAttribute('aria-expanded',open);
    });
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
      links.classList.remove('open');burger.classList.remove('open');burger.setAttribute('aria-expanded','false');
    })});

    var els=document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
      },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
      els.forEach(function(el){io.observe(el)});
    }else{els.forEach(function(el){el.classList.add('in')})}

    document.getElementById('yr').textContent=new Date().getFullYear();
  })();
