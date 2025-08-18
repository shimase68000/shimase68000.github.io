/* 
  File: items.js
  Author: UG.
  Created: 2025-08-02
  Last Updated: 2025-08-19
  Description: 
    各カテゴリ（X68000、艦これなど）のアイテム定義を格納するデータファイル。
    HTML本体から <script src="items.js"> により読み込まれる。

  License: MIT License
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

        const ITEM_DOWNLOAD = 1;
        const ITEM_WEBTOOL  = 2;

        // Item of X68000
        const item_x68000 = [
            "X680x0",
            5,
            ITEM_DOWNLOAD, "OPM Tone Editor 'Ｎ' version 1.03", "OE103.LZH", "2025-08-19T00:15:00",
                           "２ファイル・２音色データを並行して編集可能なOPM音色エディタ",
            ITEM_DOWNLOAD, "OED File Viewer Prototype version 0.01", "OEDV001.LZH", "2025-08-01T12:00:00",
                           "OPM Tone Editorで作成したOEDファイルのヘッダ情報を表示するビューア"
        ];

        // Item of 艦これ
        const item_kancolle = [
            "艦これ",
            5,
            ITEM_WEBTOOL, "2025梅雨イベント てるてる坊主計算", "./kc_tuyu2025", "2025-07-02T19:00:00",
                          "2025年梅雨イベントのてるてる坊主数計算ツール（開催期間：2025-05-30～2025-06-27）",
            ITEM_WEBTOOL, "2025節分イベント 豆計算", "", "",
                          "2025年節分イベントの豆数計算ツール（開催期間：2025-01-28～2025-02-28）",
        ];

        const items = [ item_x68000, item_kancolle ];
