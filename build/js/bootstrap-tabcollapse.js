!function(t){"use strict";var a=function(a,e){this.options=e,this.$tabs=t(a),this._accordionVisible=!1,this._initAccordion(),this._checkStateOnResize();var s=this;setTimeout(function(){s.checkState()},0)};a.DEFAULTS={accordionClass:"visible-xs",tabsClass:"hidden-xs",accordionTemplate:function(t,a,e,s){return'<div class="panel panel-default">   <div class="panel-heading">      <h4 class="panel-title">      </h4>   </div>   <div id="'+a+'" class="panel-collapse collapse '+(s?"in":"")+'">       <div class="panel-body js-tabcollapse-panel-body">       </div>   </div></div>'}},a.prototype.checkState=function(){this.$tabs.is(":visible")&&this._accordionVisible?(this.showTabs(),this._accordionVisible=!1):this.$accordion.is(":visible")&&!this._accordionVisible&&(this.showAccordion(),this._accordionVisible=!0)},a.prototype.showTabs=function(){var a=this;this.$tabs.trigger(t.Event("show-tabs.bs.tabcollapse"));var e=this.$accordion.find(".js-tabcollapse-panel-heading").detach();e.each(function(){var e=t(this),s=e.data("bs.tabcollapse.parentLi"),i=a._panelHeadingToTabHeading(e);s.removeClass("active"),s.parent().hasClass("dropdown-menu")&&!s.siblings("li").hasClass("active")&&s.parent().parent().removeClass("active"),i.hasClass("collapsed")?i.removeClass("collapsed"):(s.addClass("active"),s.parent().hasClass("dropdown-menu")&&s.parent().parent().addClass("active")),s.append(e)}),t("li").hasClass("active")||t("li").first().addClass("active");var s=this.$accordion.find(".js-tabcollapse-panel-body");if(s.each(function(){var a=t(this),e=a.data("bs.tabcollapse.tabpane");e.append(a.contents().detach())}),this.$accordion.html(""),this.options.updateLinks){var i=this.getTabContentElement();i.find('[data-toggle-was="tab"], [data-toggle-was="pill"]').each(function(){var a=t(this),e=a.attr("href").replace(/-collapse$/g,"");a.attr({"data-toggle":a.attr("data-toggle-was"),"data-toggle-was":"","data-parent":"",href:e})})}this.$tabs.trigger(t.Event("shown-tabs.bs.tabcollapse"))},a.prototype.getTabContentElement=function(){var a=t(this.options.tabContentSelector);return 0===a.length&&(a=this.$tabs.siblings(".tab-content")),a},a.prototype.showAccordion=function(){this.$tabs.trigger(t.Event("show-accordion.bs.tabcollapse"));var a=this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]'),e=this;if(a.each(function(){var a=t(this),s=a.parent();a.data("bs.tabcollapse.parentLi",s),e.$accordion.append(e._createAccordionGroup(e.$accordion.attr("id"),a.detach()))}),this.options.updateLinks){var s=this.$accordion.attr("id"),i=this.$accordion.find(".js-tabcollapse-panel-body");i.find('[data-toggle="tab"], [data-toggle="pill"]').each(function(){var a=t(this),e=a.attr("href")+"-collapse";a.attr({"data-toggle-was":a.attr("data-toggle"),"data-toggle":"collapse","data-parent":"#"+s,href:e})})}this.$tabs.trigger(t.Event("shown-accordion.bs.tabcollapse"))},a.prototype._panelHeadingToTabHeading=function(t){var a=t.attr("href").replace(/-collapse$/g,"");return t.attr({"data-toggle":"tab",href:a,"data-parent":""}),t},a.prototype._tabHeadingToPanelHeading=function(t,a,e,s){return t.addClass("js-tabcollapse-panel-heading "+(s?"":"collapsed")),t.attr({"data-toggle":"collapse","data-parent":"#"+e,href:"#"+a}),t},a.prototype._checkStateOnResize=function(){var a=this;t(window).resize(function(){clearTimeout(a._resizeTimeout),a._resizeTimeout=setTimeout(function(){a.checkState()},100)})},a.prototype._initAccordion=function(){var a=function(){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=0;5>e;e++)t+=a.charAt(Math.floor(Math.random()*a.length));return t},e=this.$tabs.attr("id"),s=(e?e:a())+"-accordion";this.$accordion=t('<div class="panel-group '+this.options.accordionClass+'" id="'+s+'"></div>'),this.$tabs.after(this.$accordion),this.$tabs.addClass(this.options.tabsClass),this.getTabContentElement().addClass(this.options.tabsClass)},a.prototype._createAccordionGroup=function(a,e){var s=e.attr("data-target"),i=e.data("bs.tabcollapse.parentLi").is(".active");s||(s=e.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var o=t(s),n=o.attr("id")+"-collapse",c=t(this.options.accordionTemplate(e,n,a,i));return c.find(".panel-heading > .panel-title").append(this._tabHeadingToPanelHeading(e,n,a,i)),c.find(".panel-body").append(o.contents().detach()).data("bs.tabcollapse.tabpane",o),c},t.fn.tabCollapse=function(e){return this.each(function(){var s=t(this),i=s.data("bs.tabcollapse"),o=t.extend({},a.DEFAULTS,s.data(),"object"==typeof e&&e);i||s.data("bs.tabcollapse",new a(this,o))})},t.fn.tabCollapse.Constructor=a}(window.jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC10YWJjb2xsYXBzZS5qcyJdLCJuYW1lcyI6WyIkIiwiVGFiQ29sbGFwc2UiLCJlbCIsIm9wdGlvbnMiLCJ0aGlzIiwiJHRhYnMiLCJfYWNjb3JkaW9uVmlzaWJsZSIsIl9pbml0QWNjb3JkaW9uIiwiX2NoZWNrU3RhdGVPblJlc2l6ZSIsInRoYXQiLCJzZXRUaW1lb3V0IiwiY2hlY2tTdGF0ZSIsIkRFRkFVTFRTIiwiYWNjb3JkaW9uQ2xhc3MiLCJ0YWJzQ2xhc3MiLCJhY2NvcmRpb25UZW1wbGF0ZSIsImhlYWRpbmciLCJncm91cElkIiwicGFyZW50SWQiLCJhY3RpdmUiLCJwcm90b3R5cGUiLCJpcyIsInNob3dUYWJzIiwiJGFjY29yZGlvbiIsInNob3dBY2NvcmRpb24iLCJ2aWV3IiwidHJpZ2dlciIsIkV2ZW50IiwiJHBhbmVsSGVhZGluZ3MiLCJmaW5kIiwiZGV0YWNoIiwiZWFjaCIsIiRwYW5lbEhlYWRpbmciLCIkcGFyZW50TGkiLCJkYXRhIiwiJG9sZEhlYWRpbmciLCJfcGFuZWxIZWFkaW5nVG9UYWJIZWFkaW5nIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJoYXNDbGFzcyIsInNpYmxpbmdzIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJmaXJzdCIsIiRwYW5lbEJvZGllcyIsIiRwYW5lbEJvZHkiLCIkdGFiUGFuZSIsImNvbnRlbnRzIiwiaHRtbCIsInVwZGF0ZUxpbmtzIiwiJHRhYkNvbnRlbnRzIiwiZ2V0VGFiQ29udGVudEVsZW1lbnQiLCIkZWwiLCJocmVmIiwiYXR0ciIsInJlcGxhY2UiLCJkYXRhLXRvZ2dsZSIsImRhdGEtdG9nZ2xlLXdhcyIsImRhdGEtcGFyZW50IiwidGFiQ29udGVudFNlbGVjdG9yIiwibGVuZ3RoIiwiJGhlYWRpbmdzIiwiJGhlYWRpbmciLCJfY3JlYXRlQWNjb3JkaW9uR3JvdXAiLCIkc2VsZWN0b3IiLCJfdGFiSGVhZGluZ1RvUGFuZWxIZWFkaW5nIiwid2luZG93IiwicmVzaXplIiwiY2xlYXJUaW1lb3V0IiwiX3Jlc2l6ZVRpbWVvdXQiLCJyYW5kb21TdHJpbmciLCJyZXN1bHQiLCJwb3NzaWJsZSIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcmNJZCIsImFjY29yZGlvbklkIiwiYWZ0ZXIiLCJ0YWJTZWxlY3RvciIsIiRwYW5lbCIsImZuIiwidGFiQ29sbGFwc2UiLCJvcHRpb24iLCIkdGhpcyIsImV4dGVuZCIsIkNvbnN0cnVjdG9yIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQ0FBQyxTQUFVQSxHQUVQLFlBS0EsSUFBSUMsR0FBYyxTQUFVQyxFQUFJQyxHQUM1QkMsS0FBS0QsUUFBWUEsRUFDakJDLEtBQUtDLE1BQVNMLEVBQUVFLEdBRWhCRSxLQUFLRSxtQkFBb0IsRUFDekJGLEtBQUtHLGlCQUNMSCxLQUFLSSxxQkFNTCxJQUFJQyxHQUFPTCxJQUNYTSxZQUFXLFdBQ1RELEVBQUtFLGNBQ0osR0FHUFYsR0FBWVcsVUFDUkMsZUFBZ0IsYUFDaEJDLFVBQVcsWUFDWEMsa0JBQW1CLFNBQVNDLEVBQVNDLEVBQVNDLEVBQVVDLEdBQ3BELE1BQVEsZ0lBS2lCRixFQUFVLHFDQUF1Q0UsRUFBUyxLQUFPLElBQU0sNEZBU3hHbEIsRUFBWW1CLFVBQVVULFdBQWEsV0FDM0JQLEtBQUtDLE1BQU1nQixHQUFHLGFBQWVqQixLQUFLRSxtQkFDbENGLEtBQUtrQixXQUNMbEIsS0FBS0UsbUJBQW9CLEdBQ2xCRixLQUFLbUIsV0FBV0YsR0FBRyxjQUFnQmpCLEtBQUtFLG9CQUMvQ0YsS0FBS29CLGdCQUNMcEIsS0FBS0UsbUJBQW9CLElBSWpDTCxFQUFZbUIsVUFBVUUsU0FBVyxXQUM3QixHQUFJRyxHQUFPckIsSUFDWEEsTUFBS0MsTUFBTXFCLFFBQVExQixFQUFFMkIsTUFBTSw0QkFFM0IsSUFBSUMsR0FBaUJ4QixLQUFLbUIsV0FBV00sS0FBSyxpQ0FBaUNDLFFBRTNFRixHQUFlRyxLQUFLLFdBQ2hCLEdBQUlDLEdBQWdCaEMsRUFBRUksTUFDdEI2QixFQUFZRCxFQUFjRSxL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RUFBVTdDLEVBQVNDLEVBQVVDLElBQ2hIK0QsRUFBT3JELEtBQUssZUFBZWEsT0FBT0ksRUFBU0MsV0FBV2pCLFVBQ2pESSxLQUFLLHlCQUEwQlksR0FFN0JvQyxHQVFYbEYsRUFBRW1GLEdBQUdDLFlBQWMsU0FBVUMsR0FDekIsTUFBT2pGLE1BQUsyQixLQUFLLFdBQ2IsR0FBSXVELEdBQVV0RixFQUFFSSxNQUNaOEIsRUFBVW9ELEVBQU1wRCxLQUFLLGtCQUNyQi9CLEVBQVVILEVBQUV1RixVQUFXdEYsRUFBWVcsU0FBVTBFLEVBQU1wRCxPQUEwQixnQkFBWG1ELElBQXVCQSxFQUV4Rm5ELElBQU1vRCxFQUFNcEQsS0FBSyxpQkFBa0IsR0FBSWpDLEdBQVlHLEtBQU1ELE9BSXRFSCxFQUFFbUYsR0FBR0MsWUFBWUksWUFBY3ZGLEdBR2pDaUUsT0FBT3VCIiwiZmlsZSI6ImJvb3RzdHJhcC10YWJjb2xsYXBzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoJCkge1xuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBUQUJDT0xMQVBTRSBDTEFTUyBERUZJTklUSU9OXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFyIFRhYkNvbGxhcHNlID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyAgID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy4kdGFicyAgPSAkKGVsKTtcblxuICAgICAgICB0aGlzLl9hY2NvcmRpb25WaXNpYmxlID0gZmFsc2U7IC8vY29udGVudCBpcyBhdHRhY2hlZCB0byB0YWJzIGF0IGZpcnN0XG4gICAgICAgIHRoaXMuX2luaXRBY2NvcmRpb24oKTtcbiAgICAgICAgdGhpcy5fY2hlY2tTdGF0ZU9uUmVzaXplKCk7XG5cblxuICAgICAgICAvLyBjaGVja1N0YXRlKCkgaGFzIGdvbmUgdG8gc2V0VGltZW91dCBmb3IgbWFraW5nIGl0IHBvc3NpYmxlIHRvIGF0dGFjaCBsaXN0ZW5lcnMgdG9cbiAgICAgICAgLy8gc2hvd24tYWNjb3JkaW9uLmJzLnRhYmNvbGxhcHNlIGV2ZW50IG9uIHBhZ2UgbG9hZC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mbGF0bG9naWMvYm9vdHN0cmFwLXRhYmNvbGxhcHNlL2lzc3Vlcy8yM1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhhdC5jaGVja1N0YXRlKCk7XG4gICAgICAgIH0sIDApO1xuICAgIH07XG5cbiAgICBUYWJDb2xsYXBzZS5ERUZBVUxUUyA9IHtcbiAgICAgICAgYWNjb3JkaW9uQ2xhc3M6ICd2aXNpYmxlLXhzJyxcbiAgICAgICAgdGFic0NsYXNzOiAnaGlkZGVuLXhzJyxcbiAgICAgICAgYWNjb3JkaW9uVGVtcGxhdGU6IGZ1bmN0aW9uKGhlYWRpbmcsIGdyb3VwSWQsIHBhcmVudElkLCBhY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiAgJzxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICcgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnICAgICAgPGg0IGNsYXNzPVwicGFuZWwtdGl0bGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgIDwvaDQ+JyArXG4gICAgICAgICAgICAgICAgICAgICcgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgJyAgIDxkaXYgaWQ9XCInICsgZ3JvdXBJZCArICdcIiBjbGFzcz1cInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlICcgKyAoYWN0aXZlID8gJ2luJyA6ICcnKSArICdcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJyAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBqcy10YWJjb2xsYXBzZS1wYW5lbC1ib2R5XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICcgICAgICAgPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICcgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRhYkNvbGxhcHNlLnByb3RvdHlwZS5jaGVja1N0YXRlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHRoaXMuJHRhYnMuaXMoJzp2aXNpYmxlJykgJiYgdGhpcy5fYWNjb3JkaW9uVmlzaWJsZSl7XG4gICAgICAgICAgICB0aGlzLnNob3dUYWJzKCk7XG4gICAgICAgICAgICB0aGlzLl9hY2NvcmRpb25WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy4kYWNjb3JkaW9uLmlzKCc6dmlzaWJsZScpICYmICF0aGlzLl9hY2NvcmRpb25WaXNpYmxlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd0FjY29yZGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fYWNjb3JkaW9uVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVGFiQ29sbGFwc2UucHJvdG90eXBlLnNob3dUYWJzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHZpZXcgPSB0aGlzO1xuICAgICAgICB0aGlzLiR0YWJzLnRyaWdnZXIoJC5FdmVudCgnc2hvdy10YWJzLmJzLnRhYmNvbGxhcHNlJykpO1xuXG4gICAgICAgIHZhciAkcGFuZWxIZWFkaW5ncyA9IHRoaXMuJGFjY29yZGlvbi5maW5kKCcuanMtdGFiY29sbGFwc2UtcGFuZWwtaGVhZGluZycpLmRldGFjaCgpO1xuXG4gICAgICAgICRwYW5lbEhlYWRpbmdzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHBhbmVsSGVhZGluZyA9ICQodGhpcyksXG4gICAgICAgICAgICAkcGFyZW50TGkgPSAkcGFuZWxIZWFkaW5nLmRhdGEoJ2JzLnRhYmNvbGxhcHNlLnBhcmVudExpJyk7XG5cbiAgICAgICAgICAgIHZhciAkb2xkSGVhZGluZyA9IHZpZXcuX3BhbmVsSGVhZGluZ1RvVGFiSGVhZGluZygkcGFuZWxIZWFkaW5nKTtcblxuICAgICAgICAgICAgJHBhcmVudExpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmICgkcGFyZW50TGkucGFyZW50KCkuaGFzQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKSAmJiAhJHBhcmVudExpLnNpYmxpbmdzKCdsaScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICRwYXJlbnRMaS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghJG9sZEhlYWRpbmcuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgICAgICAgJHBhcmVudExpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBpZiAoJHBhcmVudExpLnBhcmVudCgpLmhhc0NsYXNzKCdkcm9wZG93bi1tZW51JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJHBhcmVudExpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRvbGRIZWFkaW5nLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHBhcmVudExpLmFwcGVuZCgkcGFuZWxIZWFkaW5nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCEkKCdsaScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgJCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyICRwYW5lbEJvZGllcyA9IHRoaXMuJGFjY29yZGlvbi5maW5kKCcuanMtdGFiY29sbGFwc2UtcGFuZWwtYm9keScpO1xuICAgICAgICAkcGFuZWxCb2RpZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICRwYW5lbEJvZHkgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICR0YWJQYW5lID0gJHBhbmVsQm9keS5kYXRhKCdicy50YWJjb2xsYXBzZS50YWJwYW5lJyk7XG4gICAgICAgICAgICAkdGFiUGFuZS5hcHBlbmQoJHBhbmVsQm9keS5jb250ZW50cygpLmRldGFjaCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFjY29yZGlvbi5odG1sKCcnKTtcblxuICAgICAgICBpZih0aGlzLm9wdGlvbnMudXBkYXRlTGlua3MpIHtcbiAgICAgICAgICAgIHZhciAkdGFiQ29udGVudHMgPSB0aGlzLmdldFRhYkNvbnRlbnRFbGVtZW50KCk7XG4gICAgICAgICAgICAkdGFiQ29udGVudHMuZmluZCgnW2RhdGEtdG9nZ2xlLXdhcz1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlLXdhcz1cInBpbGxcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciAkZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBocmVmID0gJGVsLmF0dHIoJ2hyZWYnKS5yZXBsYWNlKC8tY29sbGFwc2UkL2csICcnKTtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdkYXRhLXRvZ2dsZSc6ICRlbC5hdHRyKCdkYXRhLXRvZ2dsZS13YXMnKSxcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdG9nZ2xlLXdhcyc6ICcnLFxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1wYXJlbnQnOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0YWJzLnRyaWdnZXIoJC5FdmVudCgnc2hvd24tdGFicy5icy50YWJjb2xsYXBzZScpKTtcbiAgICB9O1xuXG4gICAgVGFiQ29sbGFwc2UucHJvdG90eXBlLmdldFRhYkNvbnRlbnRFbGVtZW50ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyICR0YWJDb250ZW50cyA9ICQodGhpcy5vcHRpb25zLnRhYkNvbnRlbnRTZWxlY3Rvcik7XG4gICAgICAgIGlmKCR0YWJDb250ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICR0YWJDb250ZW50cyA9IHRoaXMuJHRhYnMuc2libGluZ3MoJy50YWItY29udGVudCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkdGFiQ29udGVudHM7XG4gICAgfTtcblxuICAgIFRhYkNvbGxhcHNlLnByb3RvdHlwZS5zaG93QWNjb3JkaW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy4kdGFicy50cmlnZ2VyKCQuRXZlbnQoJ3Nob3ctYWNjb3JkaW9uLmJzLnRhYmNvbGxhcHNlJykpO1xuXG4gICAgICAgIHZhciAkaGVhZGluZ3MgPSB0aGlzLiR0YWJzLmZpbmQoJ2xpOm5vdCguZHJvcGRvd24pIFtkYXRhLXRvZ2dsZT1cInRhYlwiXSwgbGk6bm90KC5kcm9wZG93bikgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScpLFxuICAgICAgICAgICAgdmlldyA9IHRoaXM7XG4gICAgICAgICRoZWFkaW5ncy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJGhlYWRpbmcgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICRwYXJlbnRMaSA9ICRoZWFkaW5nLnBhcmVudCgpO1xuICAgICAgICAgICAgJGhlYWRpbmcuZGF0YSgnYnMudGFiY29sbGFwc2UucGFyZW50TGknLCAkcGFyZW50TGkpO1xuICAgICAgICAgICAgdmlldy4kYWNjb3JkaW9uLmFwcGVuZCh2aWV3Ll9jcmVhdGVBY2NvcmRpb25Hcm91cCh2aWV3LiRhY2NvcmRpb24uYXR0cignaWQnKSwgJGhlYWRpbmcuZGV0YWNoKCkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnVwZGF0ZUxpbmtzKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50SWQgPSB0aGlzLiRhY2NvcmRpb24uYXR0cignaWQnKTtcbiAgICAgICAgICAgIHZhciAkc2VsZWN0b3IgPSB0aGlzLiRhY2NvcmRpb24uZmluZCgnLmpzLXRhYmNvbGxhcHNlLXBhbmVsLWJvZHknKTtcbiAgICAgICAgICAgICRzZWxlY3Rvci5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciAkZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBocmVmID0gJGVsLmF0dHIoJ2hyZWYnKSArICctY29sbGFwc2UnO1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdG9nZ2xlLXdhcyc6ICRlbC5hdHRyKCdkYXRhLXRvZ2dsZScpLFxuICAgICAgICAgICAgICAgICAgICAnZGF0YS10b2dnbGUnOiAnY29sbGFwc2UnLFxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1wYXJlbnQnOiAnIycgKyBwYXJlbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0YWJzLnRyaWdnZXIoJC5FdmVudCgnc2hvd24tYWNjb3JkaW9uLmJzLnRhYmNvbGxhcHNlJykpO1xuICAgIH07XG5cbiAgICBUYWJDb2xsYXBzZS5wcm90b3R5cGUuX3BhbmVsSGVhZGluZ1RvVGFiSGVhZGluZyA9IGZ1bmN0aW9uKCRoZWFkaW5nKSB7XG4gICAgICAgIHZhciBocmVmID0gJGhlYWRpbmcuYXR0cignaHJlZicpLnJlcGxhY2UoLy1jb2xsYXBzZSQvZywgJycpO1xuICAgICAgICAkaGVhZGluZy5hdHRyKHtcbiAgICAgICAgICAgICdkYXRhLXRvZ2dsZSc6ICd0YWInLFxuICAgICAgICAgICAgJ2hyZWYnOiBocmVmLFxuICAgICAgICAgICAgJ2RhdGEtcGFyZW50JzogJydcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAkaGVhZGluZztcbiAgICB9O1xuXG4gICAgVGFiQ29sbGFwc2UucHJvdG90eXBlLl90YWJIZWFkaW5nVG9QYW5lbEhlYWRpbmcgPSBmdW5jdGlvbigkaGVhZGluZywgZ3JvdXBJZCwgcGFyZW50SWQsIGFjdGl2ZSkge1xuICAgICAgICAkaGVhZGluZy5hZGRDbGFzcygnanMtdGFiY29sbGFwc2UtcGFuZWwtaGVhZGluZyAnICsgKGFjdGl2ZSA/ICcnIDogJ2NvbGxhcHNlZCcpKTtcbiAgICAgICAgJGhlYWRpbmcuYXR0cih7XG4gICAgICAgICAgICAnZGF0YS10b2dnbGUnOiAnY29sbGFwc2UnLFxuICAgICAgICAgICAgJ2RhdGEtcGFyZW50JzogJyMnICsgcGFyZW50SWQsXG4gICAgICAgICAgICAnaHJlZic6ICcjJyArIGdyb3VwSWRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAkaGVhZGluZztcbiAgICB9O1xuXG4gICAgVGFiQ29sbGFwc2UucHJvdG90eXBlLl9jaGVja1N0YXRlT25SZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdmlldyA9IHRoaXM7XG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh2aWV3Ll9yZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgIHZpZXcuX3Jlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmlldy5jaGVja1N0YXRlKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG5cbiAgICBUYWJDb2xsYXBzZS5wcm90b3R5cGUuX2luaXRBY2NvcmRpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIixcbiAgICAgICAgICAgICAgICBwb3NzaWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgICAgICAgICAgIGZvciggdmFyIGk9MDsgaSA8IDU7IGkrKyApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc3JjSWQgPSB0aGlzLiR0YWJzLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICBhY2NvcmRpb25JZCA9IChzcmNJZCA/IHNyY0lkIDogcmFuZG9tU3RyaW5nKCkpICsgJy1hY2NvcmRpb24nO1xuXG4gICAgICAgIHRoaXMuJGFjY29yZGlvbiA9ICQoJzxkaXYgY2xhc3M9XCJwYW5lbC1ncm91cCAnICsgdGhpcy5vcHRpb25zLmFjY29yZGlvbkNsYXNzICsgJ1wiIGlkPVwiJyArIGFjY29yZGlvbklkICsnXCI+PC9kaXY+Jyk7XG4gICAgICAgIHRoaXMuJHRhYnMuYWZ0ZXIodGhpcy4kYWNjb3JkaW9uKTtcbiAgICAgICAgdGhpcy4kdGFicy5hZGRDbGFzcyh0aGlzLm9wdGlvbnMudGFic0NsYXNzKTtcbiAgICAgICAgdGhpcy5nZXRUYWJDb250ZW50RWxlbWVudCgpLmFkZENsYXNzKHRoaXMub3B0aW9ucy50YWJzQ2xhc3MpO1xuICAgIH07XG5cbiAgICBUYWJDb2xsYXBzZS5wcm90b3R5cGUuX2NyZWF0ZUFjY29yZGlvbkdyb3VwID0gZnVuY3Rpb24ocGFyZW50SWQsICRoZWFkaW5nKXtcbiAgICAgICAgdmFyIHRhYlNlbGVjdG9yID0gJGhlYWRpbmcuYXR0cignZGF0YS10YXJnZXQnKSxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICRoZWFkaW5nLmRhdGEoJ2JzLnRhYmNvbGxhcHNlLnBhcmVudExpJykuaXMoJy5hY3RpdmUnKTtcblxuICAgICAgICBpZiAoIXRhYlNlbGVjdG9yKSB7XG4gICAgICAgICAgICB0YWJTZWxlY3RvciA9ICRoZWFkaW5nLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIHRhYlNlbGVjdG9yID0gdGFiU2VsZWN0b3IgJiYgdGFiU2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpOyAvL3N0cmlwIGZvciBpZTdcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkdGFiUGFuZSA9ICQodGFiU2VsZWN0b3IpLFxuICAgICAgICAgICAgZ3JvdXBJZCA9ICR0YWJQYW5lLmF0dHIoJ2lkJykgKyAnLWNvbGxhcHNlJyxcbiAgICAgICAgICAgICRwYW5lbCA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRlbXBsYXRlKCRoZWFkaW5nLCBncm91cElkLCBwYXJlbnRJZCwgYWN0aXZlKSk7XG4gICAgICAgICRwYW5lbC5maW5kKCcucGFuZWwtaGVhZGluZyA+IC5wYW5lbC10aXRsZScpLmFwcGVuZCh0aGlzLl90YWJIZWFkaW5nVG9QYW5lbEhlYWRpbmcoJGhlYWRpbmcsIGdyb3VwSWQsIHBhcmVudElkLCBhY3RpdmUpKTtcbiAgICAgICAgJHBhbmVsLmZpbmQoJy5wYW5lbC1ib2R5JykuYXBwZW5kKCR0YWJQYW5lLmNvbnRlbnRzKCkuZGV0YWNoKCkpXG4gICAgICAgICAgICAuZGF0YSgnYnMudGFiY29sbGFwc2UudGFicGFuZScsICR0YWJQYW5lKTtcblxuICAgICAgICByZXR1cm4gJHBhbmVsO1xuICAgIH07XG5cblxuXG4gICAgLy8gVEFCQ09MTEFQU0UgUExVR0lOIERFRklOSVRJT05cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgJC5mbi50YWJDb2xsYXBzZSA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgICA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnRhYmNvbGxhcHNlJyk7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBUYWJDb2xsYXBzZS5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb24pO1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnRhYmNvbGxhcHNlJywgbmV3IFRhYkNvbGxhcHNlKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4udGFiQ29sbGFwc2UuQ29uc3RydWN0b3IgPSBUYWJDb2xsYXBzZTtcblxuXG59KHdpbmRvdy5qUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
