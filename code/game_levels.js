var GAME_LEVELS = [
["                                                                                ",
 "               y                                                                ",
 "           yyyyyyyy          y                                                  ",
 "                                                                                ",
 "                                          xx!!xxxx                              ",
 "                                          !xxx!xx                               ",
 "              xxxxxx                      !  xxxx                               ",
 "                 xxxx                      !  xx                                ",
 "                    xx          xxxxxxx   !            xxxxxx                   ",
 "       xxxx                       xxx      !            xxx         xx          ",
 "          xxx                                                      xxyx         ",
 "               x!x            c                                  xxxxxx      x  ",
 "  x     -      x!x!         xxxx         !                      xxxx         x  ",
 "  x           xx!xx!                      !xx                 xxxxxxxx       x  ",
 "  x          xxx!xxx!!             xx   !!x  x               xxxxxxx   x   o x  ",
 "  x        xxxx!!!xxxx!                !!x    x      -     xxxxxxxxxx        x  ",
 "  x  @    xxxx!!!!!xxxx!!!!           !x        x        xxxxxxxxxxxxx       x  ",
 "  xxxxxxxxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxx        xxxxxxxxxxxxxxxxxxxxxxx!!!xxxx  ",
 "                       !!! !!!      yyx!!!!!!!!!!x!!!!!y             x!!!!!x    ",
 "                       !   !!!        yx!!!!!!!!x!!yy !!              xxxxx     ",
 "                     !       !!!        x!!!!!!xyy      !                       ",
 "                  !!! !!       !!     !!!xxxxxxy  !!   ! !                      ",
 "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
 "                                                                                "],
  ["                                                                      yyy                                             ",
   "                 yyyyy                                             yyyyyyy  yy                                        ",
   "                yyyyyyyy                                         yyyyyyyyyyyyyyy                         yy  yy       ",
   "                                  yyyyyy                                                               yyyyy yyyy     ",
   "                                yyyyyyyyyyy         !                                                  yyyyyyyyyyyy   ",
   "                              yyyyyyyyyyyyyyyy     !!!                                                                ",
   "                                                    xv                                                          o     ",
   "                                                    x                   xxxxxxxxx||xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "      @                                             xv                                                   ||||         ",
   "xxxxxxxxx!!!                                        x   xxxxxxxxx                                                     ",
   "xxxxxxxxxx!!                                        x     xxxxxx                                                      ",
   "xxxxxxxxxxx!                                        x                                                                 ",
   "xxxxxxxxxxxxv     y                                 x                                                                 ",
   "xxxxxxxxxxxx      y                                 x                 xxxxxxxxxxxx                                    ",
   "xxxxxxxxxxxx      y                                 x!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxx                             ",
   "xxxxxxxxxxxx    yyyyy                                vxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx      -                         ",
   "xxxxxxxxxxxx     yyy                                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                             ",
   "xxxxxxxxxxxx      y                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                   ",
   "xxxxxxxxx  v                                             xxxxxxxxxxxxxxxxxx      xxxxxxxxxxxxxxxxxxxx                 ",
   "xxxxxxxxx                                              xxxxxxxxxxxxxxxxxxx    c   xxxxxxxxxxxxxxxxx           xxxxxx  ",
   " xxxxxxxxx                                                                                                 xxxxxx     ",
   "xxxxxxxxx!                                                                                              xxxxxxx       ",
   "  xxxxxxxx                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        ",
   " xxxxxx! v                                                xxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        ",
   " xxxxxxx                                               xxxxx                              vv    v                     ",
   "  xxxxx      -               xxxxxxxxx                                                                                ",
   " xxxxx                        xxx               xxx                                                                   ",
   "  xxxx!!                                  xxxxxxxxxx            ==                       ===                          ",
   "  xxx!!!!!    xxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   " xxxxx!!!!!!!!!!xxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "                                                                                                 ",
   "       y                                                                                         ",
   "      yoy                                       !!                                               ",
   "       y                                xx!!!!!xx!                                               ",
   "     xxxxxxxxxxxyyyyyxxxxx              xxxxxxxxxv                     -                         ",
   "        xxxxxxx  yyy xxxx                                                                        ",
   "                                                                                         y       ",
   "                         xxxxxxxx                          x                             y       ",
   "         =                  xxxx                          xx     xx     xxxxx            y       ",
   "                              yyyyxx    xxxxyyyxx                    yyyy              yyyyy     ",
   "                                           xxxyxx                   yy                  yyy      ",
   "                                       y             xx                                  y       ",
   "                                      yy                                              xxxxxxx    ",
   "        c                     -     yyyyyyyy                        xxxxyx                       ",
   "                           xxxxxxxx   yy                        xxxxxxxyyxxxx                    ",
   "       xx                     xxxx     y                         |                               ",
   "                      xx                xxxyyyxxx                 -                              ",
   "                                          yyyyyy     xxxxxx                                      ",
   "             xx                                      xxxxxxxxxxxx      xxxxxxx                   ",
   "                   -                                                   xxxxxxxx                  ",
   " @                                                                                    xx!!!!!!!!!",
   "xxx                                                                                 xxxx!!!!!!!!!",
   "xxxxx                      xxxxxx                  xxxxxyyyyy                     xxxxxx!!!!!!!!!",
   "xxxxxxxxxxxxxxxx   =  xxxxxxxxxxxxyyyxxx    xxxxxxxxxxxxxxxxxxxxx  xyxxxxxxxxxyyxxxxxxx!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["              o                          o                           o                                              ",
   "    c                       c                            -                              -                o          ",
   "             -                              -                                 c                                c    ",
   "       yyy        yyy    yyyyyyyyy     yy         yy          yy        yyy        yy   yyyyy     yyyyyyyyy         ",
   "        yyy       yy    yy       yy    yy         yy          yy        yyy        yy    yyy     yy       yy        ",
   "         yyy     yy    yy         yy   yy         yy     o    yy        yyy        yy    yyy    yy         yy       ",
   "          yyy   yy     yy         yy   yy         yy          yy        yyy        yy    yyy    yy         yy       ",
   "      o    yyyyyy      yy         yy   yy         yy          yy        yyy        yy    yyy    yy         yy       ",
   "            yyyy       yy         yy   yy         yy          yy        yyy        yy    yyy    yy         yy    o  ",
   "           yyyy        yy         yy   yy         yy          yy        yyy        yy    yyy    yy         yy       ",
   "          yyy           yy       yy     yy       yy            yy      yy yy       yy    yyy    yy         yy       ",
   "         yyy             yyyyyyyyy       yyyyyyyyy              yyyyyyyy   yyyyyyyy     yyyyy   yy         yy       ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "    @                                                                                                               ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
