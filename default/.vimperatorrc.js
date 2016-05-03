// vim: ft=javascript sw=2 sts=2 fdm=marker

(function () {
  //Ctrl+Cで選択範囲コピーと読み込み中断
  //http://d.hatena.ne.jp/teramako/20071128/p2
  if (1) {
    mappings.addUserMap([modes.NORMAL,modes.VISUAL],['<C-c>'], 'Copy selected text or stop loading',
      function(){
        var sel = window.content.window.getSelection().toString();
        if (sel){
          util.copyToClipboard(sel,true);
        } else {
          BrowserStop();
          liberator.echo('Stopped loading !');
        }
      },{
        rhs: 'Copy selected text or stop loading'
      }
    );
  }


  if (1) { // search {{{
    [['Twitter', 'http://twitter.com/#!/search/%s', 'tw'],
     ['Twitter Search RSS', 'http://search.twitter.com/search.atom?q=lang:ja %s', 'ts'],
     ['togetter', 'http://togetter.com/t/%s', 'tg'],
     ['Evernote', 'https://www.evernote.com/Home.action?#x=%s', 'ev'],
     ['Weblio', 'http://www.weblio.jp/content/%s', 'wl'],
     ['MSDN', 'http://www.google.co.jp/search?q=site:Amicrosoft.com+%s', 'ms'],
     ['Monosagasi', 'http://slx.xrea.jp/mono/?key=%s', 'mo'],
     ['bing', 'http://www.bing.com/searc?q=%s', 'bi'],
     ['GoogleAnime', 'http://www.google.co.jp/search?num=30&q=%s intitle:"anime" (avi|mpg|wmv|mpeg|mkv|ogm) +ddl -animefield.is-there.net -torrent -torrents', 'ga'],
     ['GoogleBooks', 'http://www.google.co.jp/search?num=30&q=%s (chm|pdf|cbr|nfo) -torrents -torrent -md5 -md5sums -idpdf', 'gb'],
     ['GoogleFTP', 'http://www.google.co.jp/search?num=30&q=%s "Parent Directory" intitle:"index.of" "Name" "Last modified" "Size" "Description" -inurl:htm -inurl:html -inurl:php -xxx -shtml -opendivx -md5 -md5sums -asp', 'gf'],
     ['GoogleVideo', 'http://www.google.co.jp/search?num=30&q=%s (avi|mpg|wmv|mpeg|divx) "Parent Directory" -"Trailer" -cdkey -asp -torrent -html -web-shelf -zoozle -jsp -htm -listen77 -idmovies -shexy -eucontest -0x7', 'gv'],
     ['GoogleMusic', 'http://www.google.co.jp/search?num=30&q=%s intitle:"music" (mp3|aac|flac|wav) "Parent Directory" -htm -html -asp -php -listen77 -idmusic -airmp3 -shexy -vmp3', 'gm'],
     ['GoogleTorrent', 'http://www.google.co.jp/search?num=30&q=%s+"rar" OR "zip" OR "torrent" -trailer -blogspot -proxy', 'gt'],
     ['GoogleTranslate', 'http://translate.google.co.jp/#en|ja|%s', 'ge'],
     ['GoogleNews', 'http://www.google.co.jp/search?hl=ja&gl=jp&tbm=nws&q=%s', 'gn'],
     ['GoogleNewsRSS', 'http://news.google.com/news?ned=us&ie=UTF-8&oe=UTF-8&q=%s&lr&output=atom&num=100&hl=ja', 'gnr'],
     ['github', 'https://github.com/search?type=Everything&language=&q=%s', 'gh'],
     ['github:gist', 'https://gist.github.com/gists/search?q=%s&page=1', 'gg'],
     ['topsy', 'http://topsy.com/s?type=tweet&allow_lang=ja&q=%s', 'to'],
     ['Tumblr Dashboard', 'http://www.tumblr.com/dashboard/search/%s', 'tumblr'],
     ['Tumblrタグ検索', 'http://www.tumblr.com/tagged/%s', 'tumblrtag'],
     ['Tumblrタグ検索RSS', 'http://pipes.yahoo.com/pipes/pipe.run?Keyword=%s+site%3Awww.tumblr.com&_id=41e4f83b727bc374725c003a07ac1705&_render=rss', 'tumblrtagrss'],
     ['InternetArchive', 'http://liveweb.archive.org/%s', 'ia'],
     ['InternetArchive閉鎖サイトにアクセス', 'http://wayback.archive.org/web/*/%s', 'internetarchive'],
     ['ahkXrea', 'http://www.google.co.jp/search?hl=ja&q=%s+site%3Aahk.xrea.jp', 'ax'],
     ['HatenaBookmark', 'http://b.hatena.ne.jp/search?q=%s', 'hb'],
     ['HatenaNewEntry', 'http://b.hatena.ne.jp/entrylist?sort=eid&url=%s', 'hn'],
     ['GoogleImg', 'http://www.google.co.jp/search?tbm=isch&sa=1&q=%s', 'gi'],
     ['GoogleMap', 'http://maps.google.co.jp/maps?&q=%s', 'gm'],
     ['VimperatorWiki', 'http://wiki.livedoor.jp/shin_yan/search?keywords=%s', 'vw'],
     ['musictonic', 'http://musictonic.com/music/%s', 'mu'],
     ['about:config - Firefox - index', 'http://www.google.co.jp/search?hl=ja&q=%s+site%3Anull.michikusa.jp', 'af'],
     ['Placehole.it - Format:URL/350x150', 'http://placehold.it/%s', 'pe'],
     ['NAVER', 'http://matome.naver.jp/search?q=%s', 'nm'],
     ['FC2Video', 'http://video.fc2.com/list.php?sobj_keyword=%s', 'fv'],
     ['価格.com', 'http://kakaku.com/search_results/%s', 'ka'],
     ['realtime.yahoo.co.jp', 'http://realtime.search.yahoo.co.jp/search?p=%s', 'ry'],
     ['niconico', 'http://www.nicovideo.jp/search/%s', 'nn'],
     ['youtube', 'http://www.youtube.com/results?q=%s', 'yt'],
     ['cookpad', 'https://www.google.co.jp/search?q=inurl:cookpad.com/recipe+%s', 'cp'],
     ['searchcode', 'https://searchcode.com/?q=%s', 'sc'],
    ].forEach(function (b) {
     if (!bookmarks.isBookmarked(b[1])) {
      bookmarks.add(false, b[0], b[1], b[2], ['vimp'], false);
     }
    });
  } // }}}

// comd

  if (1) {  //autocomd駆動時のエコーをやめる  {{{
    let (original = liberator.echomsg)
    liberator.echomsg = function (msg) {
      const REAC = RegExp('-> liberator://template/chrome://liberator/content/as\\.js:\\d+');
      if (Error().stack.split(/\n/).some(RegExp.prototype.test.bind(REAC)) && /Executing .* Auto commands for .*/.test(msg))
        liberator.log(msg);
      else
        original.apply(liberator, arguments);
    };
  } // }}}

  if (1) {  //;F で開くべきタブをバッファし、最後に一気に開く {{{
    liberator.registerObserver(
      'enter',
      function () {
        let scheduled = [];
        plugins.libly.$U.around(
          events,
          'onEscape',
           function (next) {
            try {
              if (scheduled.length)
                scheduled.forEach(function (elem) buffer.followLink(elem, liberator.NEW_BACKGROUND_TAB));
            } finally {
              scheduled = [];
              return next();
            }
          }
        );
        hints._hintModes['F'].action = function (elem) (liberator.log(elem),scheduled.push(elem), hints.show("F"));
      }
    );
  } // }}}

  if (1) { // コマンドライン補完候補の高さ調整 {{{
    mappings.addUserMap(
      [modes.COMMAND_LINE],
      ['<C-g>'],
      'Adjust height of completion list',
      function() {
        let list = commandline._completions.itemList;
        list._minHeight = 0;
        list._autoSize();
      });
  } // }}}

  if (1) { // コマンドライン補完候補の表示・非表示 {{{
    mappings.addUserMap(
        [modes.COMMAND_LINE],
        ['<C-o>'],
        'Toggle visibility of completion list',
      function() {
        let list = commandline._completions.itemList;
        if (list.visible()) {
          list.hide();
        } else {
          list.show();
        }
      }
    );
  } // }}}

  if (1) { // 入力状態から割込み 単語補完 {{{
    userContext.word_completer_maps = [
    [[modes.COMMAND_LINE, modes.INSERT], ["<C-Space>"], {screen: true}],
    ];
    // 単語補完 後 指定 コマンドを実行
    userContext.word_completer_shortcut = {
      modes: [modes.NORMAL],
      maps: ["<C-t>"],
      extra: {screen: true},
      t: "tabopen",
      o: "open",
      e: "eijiro",
      w: "tabopen wikipedia",
    };
  } // }}}

  if (1) { //ピン留め {{{
    commands.addUserCommand(["pin"], "add pin to current tab",
      function(){
        var currentTab = gBrowser.mCurrentTab
        if(currentTab.pinned){
          gBrowser.unpinTab(currentTab)
        } else {
          gBrowser.pinTab(currentTab)
        }
      }
    );
  } // }}}

  if (1) { //サイト内検索 {{{
    //参考: http://vimperator.g.hatena.ne.jp/snaka72/20090102/1230901273
    //呼び出しコマンド :ss
    commands.addUserCommand(
    ['sitesearch','ss'],'Search in this site',
      function(word) {
        liberator.open("http://www.google.co.jp/search?hl=ja&q="+encodeURIComponent(word)+"+site%3A"+window.content.location.hostname);
      }
    );
  } // }}}

  if (1) { //サイト内画像検索 {{{
    //呼び出しコマンド :si
    commands.addUserCommand(
    ['siteimagesearch','si'],'Image Search Site',
      function() {
        var url = window.content.location.hostname;
        if(url.indexOf("www.")==0) {
          url = url.substring(4,url.length);
        }
        liberator.open("http://images.google.co.jp/images?q=+inurl%3A"+url);
      }
    );
  } // }}}

  if (1) { //RSS配信していなサイトをRSS配信してくれるWebサービス {{{
    commands.addUserCommand(
    ['page2rss','pr'],'RSSが無いサイトを一ページでRSS配信してくれるサービス',
      function() {
        var url = window.content.location.href;
        if(url.indexOf("http://")==0) {
          url = url.substring(7,url.length);
        }
        liberator.open("http://page2rss.com/page?url="+encodeURIComponent(url));
      }
    );
  } // }}}

  if (1) { // Google翻訳jp=en {{{
    commands.addUserCommand(
    ['GoogleTranslateJpEn','gj'],'Google翻訳jp=en',
      function() {
        var url = window.content.location.href;
        liberator.open("http://translate.google.com/translate?hl=ja&sl=en&u="+url+"?mode=cat&sort=1");
      }
    );
  } // }}}

  if (1) {  // FullTextRSSBuilder {{{
    commands.addUserCommand(
    ['FullTextRSSBuilder','futrb'],'RSS記事を全文表示するサービス',
      function() {
        var url = window.content.location.href;
        if (url.indexOf("http://")==0) {
          url=url.substring(7,url.length);
        }
        liberator.open("http://fulltextrssfeed.com/feed.php?url="+url);
      }
    );
  } // }}}

  if (1) { // feedlyadd {{{
    commands.addUserCommand(
    ['feedlyadd','fla'],'feedly Add',
      function() {
        var url = window.content.location.href;
        liberator.open("http://cloud.feedly.com/#subscription/feed/"+url);
      }
    );
  } // }}}

  if (1) {  // ニコニコ動画RSS取得 {{{
    commands.addUserCommand(
          ['nicovideoRSS', 'nvr'], 'ニコニコ動画のRSS取得',
            function() {
              var url = window.content.location.href;
              if (url.indexOf("nicovideo") == -1) {
                liberator.echo('Error: Not nicovideo', commandline.FORCE_SINGLELINE);
                return
              } else {
                if (url.indexOf("/user/") !=  -1) {
                  liberator.open(url + "?rss=2.0&lang=ja-jp");
                } else if (url.indexOf("/mylist/") != -1) {
                  liberator.open(url + "?rss=2.0&lang=ja-jp");
                } else {
                  liberator.echo('Error: Not nicovideo', commandline.FORCE_SINGLELINE);
                  return
                }
              }
            }
    );
  } // }}}

  if (1) { //ダイアログでURLを開く {{{
    commands.addUserCommand(['OpenDialogs','ods'],'ダイアログでURLを開く',
      function() {
        var url=window.content.location.href;
        openDialog(url, "_blank", 'resizeble,width=650,height=350');
      }
    );
  } // }}}

})();

// plugins setting
  // stella.js {{{
  liberator.globalVariables.stella_nico_use_comment=true
  function addLocalMappings(buffer, maps) {
    maps.forEach(
      function (map) {
        let [cmd, action, extra] = map;
        let actionFunc = action;
        extra || (extra = {});

        if (typeof action == "string") {
          if (action.charAt(0) == ':')
            actionFunc = extra.open ? function () commandline.open("", action, modes.EX)
                                  : function () liberator.execute(action);
          else
            actionFunc = function () events.feedkeys(action, extra.noremap, true);
        }
        extra.matchingUrls = buffer;
        mappings.addUserMap(
          [modes.NORMAL],
          [cmd],
          "Local mapping for " + buffer,
          actionFunc,
          extra
        );
      }
    );
  }

  addLocalMappings(
    /^(http:\/\/(es|www).nicovideo.jp\/(watch|playlist\/mylist)|(http|https):\/\/(jp|www)\.youtube\.com\/watch|http:\/\/(www\.)?vimeo\.com\/(channels\/(hd)?#)?\d+)/,
    [
      ['<C-g>', ':pageinfo S',      ],
      ['p',     ':stplay',          ],
      ['m',     ':stmute',          ],
      ['c',     ':stcomment',       ],
      ['zz',    ':stlarge',         ],
      ['s',     ':stseek! 15',      ],
      ['S',     ':stseek! -15',     ],
      ['v',     ':stvolume! 10',    ],
      ['V',     ':stvolume! -10',   ],
      ['e',     ':strelations ',    {open: true}],
      ['E',     ':strelations! ',   {open: true}],
    ]
  );
  // }}}

  //copy.js {{{
  liberator.globalVariables.copy_templates = [
    { label: 'titleAndURL', value: '%TITLE%\n%URL%' },
    { label: '[URL title]', value: '{{%URL%|%TITLE%}}' },
    { label: 'title', value: '%TITLE%', map: ',y' },
    { label: 'anchor', value: '<a href="%URL%">%TITLE%</a>' },
    { label: 'selanchor', value: '<a href="%URL%" title="%TITLE%">%SEL%</a>' },
    { label: 'htmlblockquote', value: '<blockquote cite="%URL%" title="%TITLE%">%HTMLSEL%</blockquote>' },
    { label: 'ASIN', value: 'copy ASIN code from Amazon', custom: function(){return content.document.getElementById('ASIN').value;} },
  ];  // }}}
