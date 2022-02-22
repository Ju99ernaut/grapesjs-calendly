import { type } from './consts';

export default (editor, opt = {}) => {
  const dc = editor.DomComponents;

  function script({ url, widgettype, bgcolor, textcolor, buttonlink, hidedetail }) {
    var el = this;
    function init() {
      var btn = el.querySelector(".gpd-calendly-btn"),
        bg = "#ffffff".replace("#", bgcolor),
        text = "#4d5055".replace("#", textcolor),
        link = "#00a2ff".replace("#", buttonlink),
        config = [!!hidedetail ? "hide_event_type_details=1" : "",
        bg ? "background_color=".concat(bg) : "",
        text ? "textcolor=".concat(text) : "",
        link ? "primary_color=".concat(link) : ""]
          .filter(function (option) {
            return option;
          }).join("&");
      if (widgettype === 'popup') {
        btn && btn.addEventListener("click", function () {
          return window.Calendly.initPopupWidget({
            url: "".concat(url, "?").concat(config),
          });
        });
      } else {
        btn && (btn.style.display = 'none');
        window.Calendly.initInlineWidget({
          url: "".concat(url, "?").concat(config),
          parentElement: el
        });
      }
    };
    if (window.Calendly) init();
    else {
      var link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      var script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.onload = init;
      document.head.appendChild(script);
    }
  }

  dc.addType(type, {
    model: {
      defaults: {
        name: type,
        icon: '<svg viewBox="0 0 24 24"><path d="M14 14H7v2h7m5 3H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 7H7v2h10v-2z"></path></svg>',
        droppable: false,
        resizable: false,
        script,
        attributes: {
          style: 'font-family: Helvetica'
        },
        url: 'https://calendly.com/blocomposer',
        widgettype: 'popup',
        bgcolor: '#ffffff',
        textcolor: '#4d5055',
        buttonlink: '#00a2ff',
        hidedetail: false,
        traits: [
          {
            name: 'url',
            label: 'Calendly URL',
            placeholder: 'https://calendly.com/my-test',
            default: 'https://calendly.com/my-test',
            changeProp: true,
          },
          {
            name: 'widgettype',
            label: 'Type',
            type: 'select',
            options: [
              { value: 'inline', name: 'inline' },
              { value: 'popup', name: 'popup' }
            ],
            default: 'popup',
            changeProp: true,
          },
          {
            name: 'bgcolor',
            label: 'Color background',
            type: 'color',
            default: '#ffffff',
            changeProp: true,
          },
          {
            name: 'textcolor',
            label: 'Color text',
            type: 'color',
            default: '#4d5055',
            changeProp: true,
          },
          {
            name: 'buttonlink',
            label: 'Button & Links',
            type: 'color',
            default: '#00a2ff',
            changeProp: true,
          },
          {
            name: 'hidedetail',
            label: 'High Details',
            type: 'checkbox',
            changeProp: true,
          }
        ],
        'script-props': ['url', 'widgettype', 'bgcolor', 'textcolor', 'buttonlink', 'hidedetail'],
      },
    }
  });

  dc.addType('calendly-btn', {
    model: {
      defaults: {
        name: 'calendly',
        icons: '<i className="fa fa-link"></i>',
        droppable: false,
        highlightable: false,
        resizable: false,
        removable: false,
        copyable: false,
      },
    },
    extend: 'link',
    isComponent(el) {
      if (el.tagName === 'calendly-btn')
        return { type: 'calendly-btn' };
    }
  });
}
