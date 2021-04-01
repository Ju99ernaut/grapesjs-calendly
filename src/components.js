export default (editor, opt = {}) => {
  const dc = editor.DomComponents;
  const type = 'calendly';

  const script = ({ url, bgcolor, textcolor, buttonlink, hidedetail }) => {
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
      btn && btn.addEventListener("click", function () {
        return window.Calendly.initPopupWidget({
          url: "".concat(url, "?").concat(config),
        });
      });
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
        droppable: false,
        resizable: false,
        script,
        url: 'https://calendly.com/my-test',
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
        'script-props': ['url', 'bgcolor', 'textcolor', 'buttonlink', 'hidedetail'],
      },
    }
  });

  dc.addType('calendly-btn', {
    model: {
      defaults: {
        name: 'calendly',
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
