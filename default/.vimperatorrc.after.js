// vim: ft=javascript ts=2 fdm=marker:

(function () {

  if (1) { // ヒントでリンクを選択して、アプリケーション起動 {{{
    hints._hintModes['save-with-prompt'] = hints._hintModes['a'];
    hints.addMode(
      'a',
      'External Application',
      function (link) {
        commandline.open(
          '',
          'applaunchother ' + util.escapeString(link.href) + ' ',
          modes.EX
        );
      },
      function () options.hinttags
    );

  } // }}}

})();
