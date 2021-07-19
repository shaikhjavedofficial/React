import React from 'react';
import "..Components/Section.css";

export const Section=()=>{
    return(
    <div className="App">
      <section>
        <h1>Learn React With Core Language</h1>
        <article>
          <h3>HTML</h3>
          <ul>
            <li>Tags</li>
            <li>Selectors</li>
            <li>Rules</li>
            <li>metas</li>
          </ul>
        </article>
        <article>
          <h3>CSS</h3>
          <ol>
            <li>background</li>
            <li>position</li>
            <li>styling</li>
            <li>opacity</li>
          </ol>
        </article>
        <article>
          <h3>JS</h3>
          <ul type="Square">
            <li>algos</li>
            <li>functions</li>
            <li>Methods</li>
            <li>optimisation</li>
          </ul>
        </article>
      </section>
    </div>
    );
}