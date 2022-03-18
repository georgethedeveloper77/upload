(()=>{function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$body=$("body"),this.initElements(),this.handleEvents(),this.handleChangeSaleType(),this.handleShipping(),this.handleStorehouse(),this.handleModifyAttributeSets(),this.handleAddVariations(),this.handleDeleteVariations()}var a,r;return a=e,(r=[{key:"handleEvents",value:function(){var t=this;t.$body.on("click",".select-all",(function(t){t.preventDefault();var e=$($(t.currentTarget).attr("href"));e.find("option").attr("selected",!0),e.trigger("change")})),t.$body.on("click",".deselect-all",(function(t){t.preventDefault();var e=$($(t.currentTarget).attr("href"));e.find("option").removeAttr("selected"),e.trigger("change")})),t.$body.on("change","#attribute_sets",(function(t){var e=$("#attribute_set_group"),a=$(t.currentTarget).val();e.find(".panel").hide(),a&&_.forEach(a,(function(t){e.find('.panel[data-id="'+t+'"]').show()})),$(".select2-select").select2()})),$("#attribute_sets").trigger("change"),t.$body.on("change",".is-variation-default input",(function(t){var e=$(t.currentTarget),a=$(t.currentTarget).is(":checked");$(".is-variation-default input").prop("checked",!1),a&&e.prop("checked",!0)}))}},{key:"initElements",value:function(){$(".select2-select").select2(),$(".form-date-time").datetimepicker({format:"YYYY-MM-DD HH:mm:ss",toolbarPlacement:"bottom",showTodayButton:!0,stepping:1}),$("#attribute_set_group .panel-collapse").on("shown.bs.collapse",(function(){$(".select2-select").select2()})),$('a[data-toggle="tab"]').on("shown.bs.tab",(function(){$(".select2-select").select2()}))}},{key:"handleChangeSaleType",value:function(){this.$body.on("click",".turn-on-schedule",(function(t){t.preventDefault();var e=$(t.currentTarget),a=e.closest(".price-group");e.addClass("hidden"),a.find(".turn-off-schedule").removeClass("hidden"),a.find(".detect-schedule").val(1),a.find(".scheduled-time").removeClass("hidden")})),this.$body.on("click",".turn-off-schedule",(function(t){t.preventDefault();var e=$(t.currentTarget),a=e.closest(".price-group");e.addClass("hidden"),a.find(".turn-on-schedule").removeClass("hidden"),a.find(".detect-schedule").val(0),a.find(".scheduled-time").addClass("hidden")}))}},{key:"handleStorehouse",value:function(){this.$body.on("click","input.storehouse-management-status",(function(t){var e=$(".storehouse-info");!0===$(t.currentTarget).prop("checked")?e.removeClass("hidden"):e.addClass("hidden")}))}},{key:"handleShipping",value:function(){this.$body.on("click",".change-measurement .dropdown-menu a",(function(t){t.preventDefault();var e=$(t.currentTarget),a=e.closest(".change-measurement");a.find("input[type=hidden]").val(e.attr("data-alias")),a.find(".dropdown-toggle .alias").html(e.attr("data-alias"))}))}},{key:"handleModifyAttributeSets",value:function(){var t=this;t.$body.on("click","#store-related-attributes-button",(function(e){e.preventDefault();var a=$(e.currentTarget),r=[];a.closest(".modal-content").find(".attribute-set-item:checked").each((function(t,e){r[t]=$(e).val()})),$.ajax({url:a.data("target"),type:"POST",data:{attribute_sets:r},beforeSend:function(){a.addClass("button-loading")},success:function(e){e.error?Botble.showError(e.message):(Botble.showSuccess(e.message),$("#main-manage-product-type").load(window.location.href+" #main-manage-product-type > *",(function(){t.initElements()})),$("#select-attribute-sets-modal").modal("hide")),a.removeClass("button-loading")},complete:function(){a.removeClass("button-loading")},error:function(t){Botble.handleError(t),a.removeClass("button-loading")}})}))}},{key:"handleAddVariations",value:function(){var t=this,e=function(e){var a=e.closest(".modal-content").find(".variation-form-wrapper").find("select,textarea,input").serialize();$.ajax({url:e.data("target"),type:"POST",data:a,beforeSend:function(){e.addClass("button-loading")},success:function(a){a.error?Botble.showError(a.message):(Botble.showSuccess(a.message),e.closest(".modal.fade").modal("hide"),$("#product-variations-wrapper").load(window.location.href+" #product-variations-wrapper > *",(function(){t.initElements()}))),e.removeClass("button-loading")},complete:function(){e.removeClass("button-loading")},error:function(t){Botble.handleError(t),e.removeClass("button-loading")}})};t.$body.on("click","#store-product-variation-button",(function(t){t.preventDefault(),e($(t.currentTarget))})),t.$body.on("click","#update-product-variation-button",(function(t){t.preventDefault(),e($(t.currentTarget))})),t.$body.on("click","#generate-all-versions-button",(function(e){e.preventDefault();var a=$(e.currentTarget);$.ajax({url:a.data("target"),type:"POST",beforeSend:function(){a.addClass("button-loading")},success:function(e){e.error?Botble.showError(e.message):(Botble.showSuccess(e.message),$("#generate-all-versions-modal").modal("hide"),$("#product-variations-wrapper").load(window.location.href+" #product-variations-wrapper > *",(function(){t.initElements()}))),a.removeClass("button-loading")},complete:function(){a.removeClass("button-loading")},error:function(t){Botble.handleError(t),a.removeClass("button-loading")}})})),$(document).on("click",".btn-trigger-edit-product-version",(function(e){e.preventDefault(),$("#update-product-variation-button").data("target",$(e.currentTarget).data("target"));var a=$(e.currentTarget);$.ajax({url:a.data("load-form"),type:"GET",beforeSend:function(){a.addClass("button-loading")},success:function(e){e.error?Botble.showError(e.message):($("#edit-product-variation-modal .modal-body").html(e.data),t.initElements(),Botble.initResources(),$("#edit-product-variation-modal").modal("show"),$(".list-gallery-media-images").each((function(t,e){var a=$(e);a.data("ui-sortable")&&a.sortable("destroy"),a.sortable()}))),a.removeClass("button-loading")},complete:function(){a.removeClass("button-loading")},error:function(t){a.removeClass("button-loading"),Botble.handleError(t)}})})),t.$body.on("click",".btn-trigger-add-attribute-to-simple-product",(function(e){e.preventDefault();var a=$(e.currentTarget),r=[],n=[];$.each($(".list-product-attribute-wrap-detail .product-attribute-set-item"),(function(t,e){$(e).hasClass("hidden")||""!==$(e).find(".product-select-attribute-item-value").val()&&(r.push($(e).find(".product-select-attribute-item-value").val()),n.push($(e).find(".product-select-attribute-item-value").data("set-id")))})),r.length?$.ajax({url:a.data("target"),type:"POST",data:{addedAttributes:r,addedAttributeSets:n},beforeSend:function(){a.addClass("button-loading")},success:function(e){e.error?Botble.showError(e.message):($("#main-manage-product-type").load(window.location.href+" #main-manage-product-type > *",(function(){t.initElements()})),$("#confirm-delete-version-modal").modal("hide"),Botble.showSuccess(e.message)),a.removeClass("button-loading")},complete:function(){a.removeClass("button-loading")},error:function(t){a.removeClass("button-loading"),Botble.handleError(t)}}):Botble.showError("Không có thuộc tính nào được chọn!")}))}},{key:"handleDeleteVariations",value:function(){var t=this;$(document).on("click",".btn-trigger-delete-version",(function(t){t.preventDefault(),$("#delete-version-button").data("target",$(t.currentTarget).data("target")),$("#confirm-delete-version-modal").modal("show")})),t.$body.on("click","#delete-version-button",(function(e){e.preventDefault();var a=$(e.currentTarget);$.ajax({url:a.data("target"),type:"POST",beforeSend:function(){a.addClass("button-loading")},success:function(e){e.error?Botble.showError(e.message):($("#main-manage-product-type").load(window.location.href+" #main-manage-product-type > *",(function(){t.initElements()})),$("#confirm-delete-version-modal").modal("hide"),Botble.showSuccess(e.message)),a.removeClass("button-loading")},complete:function(){a.removeClass("button-loading")},error:function(t){a.removeClass("button-loading"),Botble.handleError(t)}})}))}}])&&t(a.prototype,r),e}();$(window).on("load",(function(){new e,$("body").on("click",".list-gallery-media-images .btn_remove_image",(function(t){t.preventDefault(),$(t.currentTarget).closest("li").remove()})),$(document).on("click",".btn-trigger-select-product-attributes",(function(t){t.preventDefault(),$("#store-related-attributes-button").data("target",$(t.currentTarget).data("target")),$("#select-attribute-sets-modal").modal("show")})),$(document).on("click",".btn-trigger-add-new-product-variation",(function(t){t.preventDefault(),$("#store-product-variation-button").data("target",$(t.currentTarget).data("target")),$("#add-new-product-variation-modal").modal("show")})),$(document).on("click",".btn-trigger-generate-all-versions",(function(t){t.preventDefault(),$("#generate-all-versions-button").data("target",$(t.currentTarget).data("target")),$("#generate-all-versions-modal").modal("show")})),$(document).on("click",".btn-trigger-add-attribute",(function(t){t.preventDefault(),$(".list-product-attribute-wrap").toggleClass("hidden"),$(t.currentTarget).toggleClass("adding_attribute_enable"),$(t.currentTarget).hasClass("adding_attribute_enable")?$("#is_added_attributes").val(1):$("#is_added_attributes").val(0);var e=$(t.currentTarget).data("toggle-text");$(t.currentTarget).data("toggle-text",$(t.currentTarget).text()),$(t.currentTarget).text(e)})),$(document).on("change",".product-select-attribute-item",(function(){var t=[];$.each($(".product-select-attribute-item"),(function(e,a){""!==$(a).val()&&t.push(e)})),t.length?$(".btn-trigger-add-attribute-to-simple-product").removeClass("hidden"):$(".btn-trigger-add-attribute-to-simple-product").addClass("hidden")}));var t=function(){$.each($(".product-attribute-set-item:visible .product-select-attribute-item option"),(function(t,e){$(e).prop("value")!==$(e).closest("select").val()&&(0===$(".list-product-attribute-wrap-detail .product-select-attribute-item-value-id-"+$(e).prop("value")).length?$(e).prop("disabled",!1):$(e).prop("disabled",!0))}))};$(document).on("change",".product-select-attribute-item",(function(e){$(e.currentTarget).closest(".product-attribute-set-item").find(".product-select-attribute-item-value-wrap").html($(".list-product-attribute-values-wrap .product-select-attribute-item-value-wrap-"+$(e.currentTarget).val()).html()),$(e.currentTarget).closest(".product-attribute-set-item").find(".product-select-attribute-item-value-id-"+$(e.currentTarget).val()).prop("name","added_attributes["+$(e.currentTarget).val()+"]"),t()})),$(document).on("click",".btn-trigger-add-attribute-item",(function(e){e.preventDefault();var a=$(".list-product-attribute-values-wrap .product-select-attribute-item-template"),r=null;$.each($(".product-attribute-set-item:visible .product-select-attribute-item option"),(function(t,e){$(e).prop("value")!==$(e).closest("select").val()&&!1===$(e).prop("disabled")&&(a.find(".product-select-attribute-item-value-wrap").html($(".list-product-attribute-values-wrap .product-select-attribute-item-value-wrap-"+$(e).prop("value")).html()),r=$(e).prop("value"))}));var n=$(".list-product-attribute-wrap-detail");n.append(a.html()),n.find(".product-attribute-set-item:last-child .product-select-attribute-item").val(r),n.find(".product-select-attribute-item-value-id-"+r).prop("name","added_attributes["+r+"]"),n.find(".product-attribute-set-item").length===$(".list-product-attribute-values-wrap .product-select-attribute-item-wrap-template").length&&$(e.currentTarget).addClass("hidden"),$(".product-set-item-delete-action").removeClass("hidden"),t()})),$(document).on("click",".product-set-item-delete-action a",(function(e){e.preventDefault(),$(e.currentTarget).closest(".product-attribute-set-item").remove();var a=$(".list-product-attribute-wrap-detail");a.find(".product-attribute-set-item").length<2&&$(".product-set-item-delete-action").addClass("hidden"),a.find(".product-attribute-set-item").length<$(".list-product-attribute-values-wrap .product-select-attribute-item-wrap-template").length&&$(".btn-trigger-add-attribute-item").removeClass("hidden"),t()})),new RvMediaStandAlone(".images-wrapper .btn-trigger-edit-product-image",{onSelectFiles:function(t,e){var a=_.first(t),r=e.closest(".product-image-item-handler").find(".image-box"),n=e.closest(".list-gallery-media-images");r.find(".image-data").val(a.url),r.find(".preview_image").attr("src",a.thumb).show(),_.forEach(t,(function(t,e){if(e){var a=$(document).find("#product_select_image_template").html().replace(/__name__/gi,r.find(".image-data").attr("name")),o=$('<li class="product-image-item-handler">'+a+"</li>");o.find(".image-data").val(t.url),o.find(".preview_image").attr("src",t.thumb).show(),n.append(o)}}))}}),$(document).on("click",".btn-trigger-remove-product-image",(function(t){t.preventDefault(),$(t.currentTarget).closest(".product-image-item-handler").remove(),0===$(".list-gallery-media-images").find(".product-image-item-handler").length&&$(".default-placeholder-product-image").removeClass("hidden")})),$(document).on("click",".list-search-data .selectable-item",(function(t){t.preventDefault();var e=$(t.currentTarget),a=e.closest(".form-group").find("input[type=hidden]"),r=a.val().split(",");if($.each(r,(function(t,e){r[t]=parseInt(e)})),$.inArray(e.data("id"),r)<0){a.val()?a.val(a.val()+","+e.data("id")):a.val(e.data("id"));var n=$(document).find("#selected_product_list_template").html().replace(/__name__/gi,e.data("name")).replace(/__id__/gi,e.data("id")).replace(/__url__/gi,e.data("url")).replace(/__image__/gi,e.data("image")).replace(/__attributes__/gi,e.find("a span").text());e.closest(".form-group").find(".list-selected-products").removeClass("hidden"),e.closest(".form-group").find(".list-selected-products table tbody").append(n)}e.closest(".panel").addClass("hidden")})),$(document).on("click",".textbox-advancesearch",(function(t){var e=$(t.currentTarget),a=e.closest(".box-search-advance").find(".panel");a.removeClass("hidden"),a.addClass("active"),0===a.find(".panel-body").length&&(Botble.blockUI({target:a,iconOnly:!0,overlayColor:"none"}),$.ajax({url:e.data("target"),type:"GET",success:function(t){t.error?Botble.showError(t.message):(a.html(t.data),Botble.unblockUI(a))},error:function(t){Botble.handleError(t),Botble.unblockUI(a)}}))})),$(document).on("keyup",".textbox-advancesearch",(function(t){var e=$(t.currentTarget),a=e.closest(".box-search-advance").find(".panel");setTimeout((function(){Botble.blockUI({target:a,iconOnly:!0,overlayColor:"none"}),$.ajax({url:e.data("target")+"?keyword="+e.val(),type:"GET",success:function(t){t.error?Botble.showError(t.message):(a.html(t.data),Botble.unblockUI(a))},error:function(t){Botble.handleError(t),Botble.unblockUI(a)}})}),500)})),$(document).on("click",".box-search-advance .page-link",(function(t){t.preventDefault();var e=$(t.currentTarget);if(!e.closest(".page-item").hasClass("disabled")&&e.prop("href")){var a=e.closest(".box-search-advance").find(".panel");Botble.blockUI({target:a,iconOnly:!0,overlayColor:"none"}),$.ajax({url:e.prop("href")+"&keyword="+e.val(),type:"GET",success:function(t){t.error?Botble.showError(t.message):(a.html(t.data),Botble.unblockUI(a))},error:function(t){Botble.handleError(t),Botble.unblockUI(a)}})}})),$(document).on("click","body",(function(t){var e=$(".box-search-advance");e.is(t.target)||0!==e.has(t.target).length||e.find(".panel").addClass("hidden")})),$(document).on("click",".btn-trigger-remove-selected-product",(function(t){t.preventDefault();var e=$(t.currentTarget).closest(".form-group").find("input[type=hidden]"),a=e.val().split(",");$.each(a,(function(t,e){e=e.trim(),_.isEmpty(e)||(a[t]=parseInt(e))}));var r=a.indexOf($(t.currentTarget).data("id"));r>-1&&a.splice(r,1),e.val(a.join(",")),$(t.currentTarget).closest("tbody").find("tr").length<2&&$(t.currentTarget).closest(".list-selected-products").addClass("hidden"),$(t.currentTarget).closest("tr").remove()})),$(document).ready((function(){var t;(t=$(".wrap-relation-product")).length&&(Botble.blockUI({target:t,iconOnly:!0,overlayColor:"none"}),$.ajax({url:t.data("target"),type:"GET",success:function(e){e.error?Botble.showError(e.message):(t.html(e.data),Botble.unblockUI(t))},error:function(e){Botble.handleError(e),Botble.unblockUI(t)}}))}))}))})();