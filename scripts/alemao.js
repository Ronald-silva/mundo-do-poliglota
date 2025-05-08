// alemao.js

// 1. Skip-link Injection for Accessibility
document.addEventListener('DOMContentLoaded', function() {
    var skipLinkTarget = document.querySelector('main');
    var siteWrapper     = document.querySelector('.wp-site-blocks');
  
    if (skipLinkTarget && siteWrapper) {
      // Ensure the target has an ID
      var targetID = skipLinkTarget.id || 'wp--skip-link--target';
      skipLinkTarget.id = targetID;
  
      // Create the skip-link element
      var skipLink = document.createElement('a');
      skipLink.href = '#' + targetID;
      skipLink.classList.add('skip-link', 'screen-reader-text');
      skipLink.innerText = 'Pular para o conteúdo';
  
      // Insert before the main site wrapper
      siteWrapper.parentElement.insertBefore(skipLink, siteWrapper);
    }
  });
  
  // 2. Language Switcher / Translation Buttons
  (function() {
    // Array of translation mappings (ID, language, translation text)
    var translates = [
      // EXAMPLE:
      // { element_id: 'le_body_row_1_col_2_el_1', language: 'es', translation: 'Nuevo entrenamiento de Higor Pereira:' }
    ];
  
    // If no translations defined, set default language cookie
    if (!translates.length) {
      document.cookie = 'lang=pt-BR; SameSite=None; Secure; path=/';
      return;
    }
  
    // Apply translations
    translates.forEach(function(item) {
      var target = document.getElementById(item.element_id);
      if (!target) return;
  
      // If the element contains a link, adjust link text
      var link = target.querySelector('a');
      if (link) {
        link.textContent = item.translation;
      } else {
        // Otherwise replace inner text
        target.textContent = item.translation;
      }
    });
  
    // Create flag buttons
    var flags = { en: '🇺🇸', 'pt-BR': '🇧🇷', es: '🇪🇸' };
    var list = document.createElement('ul');
    list.style = 'list-style:none;display:flex;gap:6px;position:fixed;bottom:0;left:0;z-index:99999;';
    document.body.appendChild(list);
  
    translates.forEach(function(item) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.className = 'translate-button';
      btn.style = 'border:1px solid #b3b3b3;padding:4px 12px;border-radius:6px;background:#fff;cursor:pointer;color:#333;';
      btn.textContent = flags[item.language] || item.language;
      btn.setAttribute('data-active', item.language === translates[0].language);
      btn.addEventListener('click', function() {
        document.documentElement.lang = item.language;
        document.cookie = 'lang=' + item.language + '; SameSite=None; Secure; path=/';
        location.reload();
      });
      li.appendChild(btn);
      list.appendChild(li);
    });
  })();
  