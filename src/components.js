export default (editor, opt = {}) => {
  const c = opt;
  const dc = editor.DomComponents;
  const type = 'calendly';
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view
 //  const {
 //    url
 // } = opt;

  dc.addType('calendly', {
    model: {
      defaults: {
        name: 'calendly',
        droppable: false,
        resizable: false,
        // // shape: 'none',
        url: c.url,
        // content: `
        traits:[
          {
            name: 'url',
            label: 'Calendly URL',
            placeholder: 'https://calendly.com/my-test',
            changeprop: 1,
          },
          {
            name: 'bgcolor',
            label: 'Color background',
            type: 'color',
            default: '#ffffff',
            changeprop:1,
          },
          {
            name: 'textcolor',
            label: 'Color text',
            type: 'color',
            default: '#4d5055',
            changeprop:1,
          },
          {
            name: 'buttonlink',
            label: 'Button & Links',
            type: 'color',
            default: '#00a2ff',
            changeprop:1,
          },
          {
            name: 'hidedetail',
            label: 'High Details',
            type: 'checkbox',
            changeprop: 1

          }
        ],
        init(){

        },
        script: function() {
          var t = this;
          e = function () {
            var e = t.querySelector(".gpd-calendly-btn");
                n = '{[ url ]}';
                r = "#ffffff".replace("#", "{[bgcolor]}"),
                i = "#4d5055".replace("#", "{[textcolor]}"),
                o = "#00a2ff".replace("#", "{[buttonlink]}"),
                a = ["[{hdedetail}]"] == true ? "hide_event_type_details=1" : "", r ? "background_color=".concat(r) : "", i ? "textcolor=".concat(i) : "", o ? "primary_color=".concat(o) : "", ]
                    .filter(function (t) {
                      return t;
                    }).join("&");
            e && e.addEventListener("click", function () {
              return window.Calendly.initPopupWidget({
                  url: "".concat(n, "?").concat(a),
              });
            });
          };
          if (window.Calendly) e();
          else {
              var n = document.createElement("link");
              (n.href = "https://assets.calendly.com/assets/external/widget.css"), (n.rel = "stylesheet"), document.head.appendChild(n);
              var r = document.createElement("script");
              (r.src = "https://assets.calendly.com/assets/external/widget.js"), (r.onload = e), document.head.appendChild(r);
          }
        }
      },
        // script: `var t = this,
        //     e = function () {
        //         var e = t.querySelector(".gpd-calendly-btn"),
        //             n = '{[ url ]}',
        //             r = "#ffffff".replace("#", ""),
        //             i = "#4d5055".replace("#", ""),
        //             o = "#00a2ff".replace("#", ""),
        //             a = ["" == "true" ? "hide_event_type_details=1" : "", r ? "background_color=".concat(r) : "", i ? "text_color=".concat(i) : "", o ? "primary_color=".concat(o) : ""]
        //                 .filter(function (t) {
        //                     return t;
        //                 })
        //                 .join("&");
        //         e &&
        //             e.addEventListener("click", function () {
        //                 return window.Calendly.initPopupWidget({
        //                     url: "".concat(n, "?").concat(a),
        //                 });
        //             });
        //     };
        // if (window.Calendly) e();
        // else {
        //     var n = document.createElement("link");
        //     (n.href = "https://assets.calendly.com/assets/external/widget.css"), (n.rel = "stylesheet"), document.head.appendChild(n);
        //     var r = document.createElement("script");
        //     (r.src = "https://assets.calendly.com/assets/external/widget.js"), (r.onload = e), document.head.appendChild(r);
        // }`,

    },
    view: defaultView.extend({
      init() {
        this.listenTo(this.model, 'change:url', this.updateScript);
        const comps = this.model.get('components');
      }
    })
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
        // // shape: 'none',
        // content: `
        traits:[
          ...dc.getType('default').model.prototype.defaults.traits,
        ]
      },
    },
    extend: 'link',
    isComponent: function (el) {
      if (el.tagName === 'calendly-btn')
        return {type: 'calendly-btn'};
    }
  });
}
