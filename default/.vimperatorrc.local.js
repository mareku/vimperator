// vim: ft=javascript sw=2 sts=2 fdm=marker

// let {{{
// }}}
// plugins setting {{{
  // multi_requester.js
  // 使えなくなっているコマンドを再設定

  /* DEFAULT SITES */
  liberator.globalVariables.multi_requester_default_sites = "alc,goo,favotter-new,twitter-search-pcod-no-jp,search-twitter,wikipedia-jp"

  /* SITE_INFO */
  liberator.globalVariables.multi_requester_siteinfo = [
      {
          name:           'twitter-user',
          description:    'twitterのﾕｰｻﾞｰ発言を見る',
          url:            'http://twitter.com/#!/%s',
          xpath:          '//div[@class="tweet"]/div[@class="content"]',
     },
     {
          name:           'favotter-new',
          description:    'ふぁぼったー新着',
          url:            'http://favotter.matope.com/user.php?user=%s',
          xpath:          '//div[contains(concat(" ", @class, " "), " hentry ")]',
      },
      {
          name:           'wikipedia-ja',
          description:    'wikipedia(ja)',
          url:            'http://ja.wikipedia.org/wiki/%s',
          xpath:          '//div[@class="mw-content-ltr"]',
      },
      {
          name:           'twitter+',
          description:    'twitter+ search(twit.hiy.jp)',
          url:            'http://twit.hiy.jp/search.php?q=%s&source=no&rpp=25',
         xpath:          '//div[@class="result"]',
      },
      {
          name:           'search-twitter',
          description:    'twitter search(search.twitter.com)',
          url:            'http://search.twitter.com/search.atom?q=%s',
          xpath:          '//div[@class="entry"]',
      },
      {
          name:           '2ch-search',
          description:    '2ch search(2ch.net)',
          url:            'http://find.2ch.net/?STR=%s&TYPE=TITLE&x=0&y=0&BBS=ALL&ENCODING=SJIS&COUNT=50',
          xpath:          '//dl',
          srcEncode:      'EUC-JP',
      },
      {
          name:           'yahoofinance',
          description:    'yahoo finance',
          url:            'http://stocks.finance.yahoo.co.jp/',
          xpath:          '//div[@class="boardFinDark2 marB6"]',
      },
      {
          name:           'yahoo-chiebukuro',
          description:    'yahoo chiebukuro',
          url:            'http://chiebukuro.search.yahoo.co.jp/search?p=%s',
          xpath:          'id("KS1m")/ol',
      },
      {
          name:           'weather-yahoo',
          description:    'Yahoo!天気情報',
          url:            'http://weather.yahoo.co.jp/weather/search/?p=%s',
          xpath:          'id("cat-pass") | id("yjw_pinpoint_today") | id("yjw_pinpoint_tomorrow") | id("yjw_week")',
          srcEncode:      'UTF-8',
          extractLink:    '//table[@class="yjw_table3"]/descendant::a[1]',
      },
      {
          name:           'tenki.jp_Dress',
          description:    'tenki.jp 服装指数',
          url:            'http://season.tenki.jp/season/indexes/dress/%s.html',
          xpath:          'id("bd-main")/div/div[@class="titleBorder"] | id("bd-main")/div/div[@class="clearfix"] | id("bd-main")/div/table[@class="indexes_week_table"]',
      },
      {
          name:           'amazon',
          description:    'amazon',
          url:            'http://www.amazon.co.jp/gp/search/?__mk_ja_JP=%83J%83%5E%83J%83i&field-keywords=%s',
          xpath:          'id("rightResultsATF")',
      },
  ];

  /* KEY MAPPING */
  liberator.globalVariables.multi_requester_mappings = [
    [',mt', 'twitter+'],
    [',Mt', 'twitter+', '!'],
    [',mT', 'twitter+',    , 'z7wacg2u'],
    [',MT', 'twitter+', '!', 'z7wacg2u'],
    [',mf', 'favotter-new'],
    [',Mf', 'favotter-new', '!'],
    [',mF', 'favotter-new',    ,'z7wacg2u'],
    [',MF', 'favotter-new', '!', 'z7wacg2u'],
    [',ma', 'alc'],
    [',Ma', 'alc', '!'],
    [',mg', 'goo'],
    [',Mg', 'goo', '!'],
    [',mw', 'wikipedia-jp'],
    [',Mw', 'wikipedia-jp', '!'],
    [',me', 'weather-yahoo',   ,'8540081'],
    [',md', 'tenki.jp_Dress', , 'city-118']
  ];

  // applauncher.js
    liberator.globalVariables.applauncher_list = [
      ['name', 'application path', ['arguments', '%URL%', '%SEL%']],
      ['InternetExplore', 'C:\\Program Files\\Internet Explorer\\IEXPLORE.EXE', '%URL%'],
      ['Opera', 'E:\\bin1\\OperaPortableLegacy12\\OperaPortable.exe', '%URL%'],
      ['Iron', 'E:\\bin1\\IronPortable\\IronPortable.exe', '%URL%'],
      ['Incognito', 'E:\\bin1\\IronPortable\\IronPortable.exe',  ['--incognito', '%URL%']],
      ['mikurima_後で見る','E:\\bin1\\mikurima\\mikurima.exe', ['-later', '%URL%']],
      ['mikurima_すぐにみる','E:\\bin1\\mikurima\\mikurima.exe', ['-nolist', '%URL%']],
      ['ecExt5_c','E:\\bin\\esExt5\\esExt5_c\\esExt5_c.exe', '%URL%'],
    ];
    liberator.globalVariables.applauncher_charset = 'Shift_JIS';

// }}}
