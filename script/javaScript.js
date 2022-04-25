$(document).ready(function(){
    let owl =$(".owl-carousel");

    owl.owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        touchDrag: true,
        animateOut: 'fadeOut',
        nav: true,
    });

    let popUp = $('.popup');

    $('.products_more_info').click(function () {
      let infoBox = $(this).parent();
      let productContent = infoBox.parent();
      let contentBox = productContent.parent()
      let imgBox = contentBox.siblings('.article-box_tree__content-box__img-box');
      let img = imgBox.children();
      let contextBox = contentBox.siblings('.article-box_tree__content-box__context-box');
      let contextTitle = contextBox.children().eq(0);
      let contextText = contextBox.children().eq(1);

      popUp.children().not('.popup_close-box').remove();
      popUp.css('display', 'flex');
      imgBox.clone().addClass('popup_img-box').appendTo(popUp);
      img.addClass('popup_img').appendTo(imgBox);
      $('<div></div>').addClass('popup_context-box').appendTo(popUp);
      contextTitle.clone().addClass('popup_title').appendTo('.popup_context-box');
      contextText.clone().addClass('popup_text').appendTo('.popup_context-box');
      productContent.children('.products_rating').clone().addClass('popup_rating').appendTo('.popup_context-box');
      productContent.children('.stock-btn').clone().addClass('popup_stock-btn').appendTo('.popup_context-box');
      productContent.children('.add-to-links').clone().addClass('popup_add-to-links').appendTo('.popup_context-box');


      $('.popup_close').click(function() {
        popUp.css('display', 'none');
      });
    })

    $('.more_info').click(function () {
      let infoBox = $(this).parent();
      let contentBox = infoBox.parent();
      let imgBox = contentBox.children('.article-box_tree__content-box__img-box');
      let img = imgBox.children();
      let contextBox = contentBox.children('.article-box_tree__content-box__context-box');
      let contextTitle = contextBox.children().eq(0);
      let contextText = contextBox.children().eq(1);
      let productItemInfo = contentBox.children('.products-item-info');
      let productContent = productItemInfo.children('.products-content');

      popUp.children().not('.popup_close-box').remove();
      popUp.css('display', 'flex');
      imgBox.clone().addClass('popup_img-box').appendTo(popUp);
      img.addClass('popup_img').appendTo(imgBox);
      $('<div></div>').addClass('popup_context-box').appendTo(popUp);
      contextTitle.clone().addClass('popup_title').appendTo('.popup_context-box');
      contextText.clone().addClass('popup_text').appendTo('.popup_context-box');
      productContent.children('.products_rating').clone().addClass('popup_rating').appendTo('.popup_context-box');
      productContent.children('.stock-btn').clone().addClass('popup_stock-btn').appendTo('.popup_context-box');
      productContent.children('.add-to-links').clone().addClass('popup_add-to-links').appendTo('.popup_context-box');


      $('.popup_close').click(function() {
        popUp.css('display', 'none');
      });
    })



  });