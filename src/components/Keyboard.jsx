import React, { useEffect } from "react";
import "../styles/Keyboard.scss";

export default function Keyboard() {
  useEffect(() => {
    const capsLock = document.getElementById("caps-lock");
    if (capsLock) {
      capsLock.addEventListener("click", function () {
        const pressed = this.getAttribute("aria-pressed") === "true";
        this.setAttribute("aria-pressed", !pressed);
        this.classList.toggle("active", !pressed);
      });
    }
  }, []);

  return (
    <div className="bg-white flex h-full">
      <div className="keyboard" ontouchstart="">
        <div className="row">
          <button type="button" className="btn-0">
            <span className="xs">esc</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xs noxscale">
              <span className="emoji">&#128261;</span>
            </span>
            <span className="lr xxxs">F1</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xs noxscale">
              <span className="emoji">&#128262;</span>
            </span>
            <span className="lr xxxs">F2</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xs noxscale">
              <span className="cascade"></span>
              <span className="block"></span>
            </span>
            <span className="lr xxxs">F3</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xxxs noxscale">
              <span className="apps"></span>
            </span>
            <span className="lr xxxs">F4</span>
          </button>
          <button type="button" className="btn-0">
            <span className="lr xxxs">F5</span>
          </button>
          <button type="button" className="btn-0">
            <span className="lr xxxs">F6</span>
          </button>
          <button type="button" className="btn-0">
            <span className="sm">
              <span className="left"></span>
              <span className="left"></span>
            </span>
            <span className="lr xxxs">F7</span>
          </button>
          <button type="button" className="btn-0">
            <span className="sm">
              <span className="right"></span>
              <span className="pause"></span>
            </span>
            <span className="lr xxxs">F8</span>
          </button>
          <button type="button" className="btn-0">
            <span className="sm">
              <span className="right"></span>
              <span className="right"></span>
            </span>
            <span className="lr xxxs">F9</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xs noxscale">
              <span className="emoji">&#128264;</span>
            </span>
            <span className="lr xxxs">F10</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xs noxscale">
              <span className="emoji">&#128265;</span>
            </span>
            <span className="lr xxxs">F11</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xs noxscale">
              <span className="emoji">&#128266;</span>
            </span>
            <span className="lr xxxs">F12</span>
          </button>
          <button type="button" className="btn-0">
            <span className="xs noxscale">⏏</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-1">
            <span className="lr xxxs">F13</span>
          </button>
          <button type="button" className="btn-1">
            <span className="lr xxxs">F14</span>
          </button>
          <button type="button" className="btn-1">
            <span className="lr xxxs">F15</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-1">
            <span className="lr xxxs">F16</span>
          </button>
          <button type="button" className="btn-1">
            <span className="lr xxxs">F17</span>
          </button>
          <button type="button" className="btn-1">
            <span className="lr xxxs">F18</span>
          </button>
          <button type="button" className="btn-1">
            <span className="lr xxxs">F19</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span className="sm">
              ~<br />`
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              !<br />1
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              @<br />2
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              #<br />3
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              $<br />4
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              %<br />5
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              ^<br />6
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              &amp;
              <br />7
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              *<br />8
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              (<br />9
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              )<br />0
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              _<br />-
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              +<br />=
            </span>
          </button>
          <button type="button" className="btn-3">
            <span className="lr xs">delete</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span className="xs">fn</span>
          </button>
          <button type="button" className="btn-2">
            <span className="xs">home</span>
          </button>
          <button type="button" className="btn-2">
            <span className="xs">page up</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span className="xs">clear</span>
          </button>
          <button type="button" className="btn-2">
            <span>=</span>
          </button>
          <button type="button" className="btn-2">
            <span>/</span>
          </button>
          <button type="button" className="btn-2">
            <span>*</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-3">
            <span className="ll xs">tab</span>
          </button>
          <button type="button" className="btn-2">
            <span>Q</span>
          </button>
          <button type="button" className="btn-2">
            <span>W</span>
          </button>
          <button type="button" className="btn-2">
            <span>E</span>
          </button>
          <button type="button" className="btn-2">
            <span>R</span>
          </button>
          <button type="button" className="btn-2">
            <span>T</span>
          </button>
          <button type="button" className="btn-2">
            <span>Y</span>
          </button>
          <button type="button" className="btn-2">
            <span>U</span>
          </button>
          <button type="button" className="btn-2">
            <span>I</span>
          </button>
          <button type="button" className="btn-2">
            <span>O</span>
          </button>
          <button type="button" className="btn-2">
            <span>P</span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              <br />
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              <br />
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              |<br />\
            </span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span className="xs noxpad">delete⌦</span>
          </button>
          <button type="button" className="btn-2">
            <span className="xs">end</span>
          </button>
          <button type="button" className="btn-2">
            <span className="xs">page down</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span>7</span>
          </button>
          <button type="button" className="btn-2">
            <span>8</span>
          </button>
          <button type="button" className="btn-2">
            <span>9</span>
          </button>
          <button type="button" className="btn-2">
            <span>-</span>
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            id="caps-lock"
            className="btn-4"
            aria-pressed="false"
          >
            <span className="ul xs dot-light" aria-hidden="true">
              •
            </span>
            <span className="ll xs">caps lock</span>
          </button>
          <button type="button" className="btn-2">
            <span>A</span>
          </button>
          <button type="button" className="btn-2">
            <span>S</span>
          </button>
          <button type="button" className="btn-2">
            <span>D</span>
          </button>
          <button type="button" className="btn-2">
            <span>F</span>
            <span className="bump"></span>
          </button>
          <button type="button" className="btn-2">
            <span>G</span>
          </button>
          <button type="button" className="btn-2">
            <span>H</span>
          </button>
          <button type="button" className="btn-2">
            <span>J</span>
            <span className="bump"></span>
          </button>
          <button type="button" className="btn-2">
            <span>K</span>
          </button>
          <button type="button" className="btn-2">
            <span>L</span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              :<br />;
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              &quot;
              <br />'
            </span>
          </button>
          <button type="button" className="btn-4">
            <span className="lr xs">return</span>
          </button>
        </div>
        <div className="row"></div>
        <div className="row">
          <button type="button" className="btn-2">
            <span>4</span>
          </button>
          <button type="button" className="btn-2">
            <span>5</span>
            <span className="bump"></span>
          </button>
          <button type="button" className="btn-2">
            <span>6</span>
          </button>
          <button type="button" className="btn-2">
            <span>+</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-5">
            <span className="ll xs">shift</span>
          </button>
          <button type="button" className="btn-2">
            <span>Z</span>
          </button>
          <button type="button" className="btn-2">
            <span>X</span>
          </button>
          <button type="button" className="btn-2">
            <span>C</span>
          </button>
          <button type="button" className="btn-2">
            <span>V</span>
          </button>
          <button type="button" className="btn-2">
            <span>B</span>
          </button>
          <button type="button" className="btn-2">
            <span>N</span>
          </button>
          <button type="button" className="btn-2">
            <span>M</span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              &lt;
              <br />,
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              &gt;
              <br />.
            </span>
          </button>
          <button type="button" className="btn-2">
            <span className="sm">
              ?<br />/
            </span>
          </button>
          <button type="button" className="btn-5">
            <span className="lr xs">shift</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span>
              <span className="up"></span>
            </span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span>1</span>
          </button>
          <button type="button" className="btn-2">
            <span>2</span>
          </button>
          <button type="button" className="btn-2">
            <span>3</span>
          </button>
          <button type="button" className="btn-10">
            <span className="lr xs">enter</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-7">
            <span className="ll xs">control</span>
          </button>
          <button type="button" className="btn-6">
            <span className="ul xxs">alt</span>
            <span className="ll xs">option</span>
          </button>
          <button type="button" className="btn-7">
            <span className="ll xs">command</span>
            <span className="lr xs noxscale">⌘</span>
          </button>
          <button type="button" className="btn-longest">
            <span></span>
          </button>
          <button type="button" className="btn-7">
            <span className="ll xs noxscale">⌘</span>
            <span className="lr xs">command</span>
          </button>
          <button type="button" className="btn-6">
            <span className="ur xxs">alt</span>
            <span className="lr xs">option</span>
          </button>
          <button type="button" className="btn-7">
            <span className="lr xs">control</span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-2">
            <span>
              <span className="left"></span>
            </span>
          </button>
          <button type="button" className="btn-2">
            <span>
              <span className="down"></span>
            </span>
          </button>
          <button type="button" className="btn-2">
            <span>
              <span className="right"></span>
            </span>
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn-9">
            <span>0</span>
          </button>
          <button type="button" className="btn-8">
            <span>.</span>
          </button>
        </div>
      </div>
    </div>
  );
}
