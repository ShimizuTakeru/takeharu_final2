$(function top88() {
  // スクロールしたら「トップに戻る」ボタンが表示される
  const toTopButton = $(".js-to-top");
  const scrollHeight = 100;
  toTopButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      toTopButton.fadeIn();
    } else {
      toTopButton.fadeOut();
    }

    // ページの一番下でトップに戻るボタンが消える
    const doch = $(document).innerHeight();
    const winh = $(window).innerHeight();
    const bottom = doch - winh;
    if (bottom <= $(window).scrollTop()) {
      toTopButton.fadeOut();
    }
  });

  // 「トップに戻る」ボタンをクリックしたらスクロールで戻る
  toTopButton.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
