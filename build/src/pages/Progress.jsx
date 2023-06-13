import React from 'react';

const Progress = () => {
    return (
        <div>



<div id="calendar">
  <h1>October</h1>
  <table>
    <tr><td class="lastmonth">30</td><td>1</td><td>2</td><td>3</td><td class="hastask">4</td><td>5</td><td>6</td></tr>
    <tr><td>7</td><td class="current">8</td><td class="hastask">9</td><td>10</td><td>11</td><td class="hastask">12</td><td>13</td></tr>
    <tr><td>14</td><td class="hastask">15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
    <tr><td class="hastask">21</td><td>22</td><td>23</td><td>24</td><td>25</td><td class="hastask">26</td><td>27</td></tr>
    <tr><td>28</td><td>29</td><td class="hastask">30</td><td>31</td><td class="nextmonth">1</td><td>2</td><td>3</td></tr>
  </table>
</div>


<ol class="progress-tracker">
  <li class="step completed"><a href="#" class="step-name">Assigmnent research -  - <b>October 8th</b></a></li>
  <li class="step active"><a href="#" class="step-name">Design</a></li>
  <li class="step active"><a href="#" class="step-name">Implementation</a></li>
  <li class="step"><span class="step-name">Assignment Submission</span></li>
</ol>


        </div>


    );
};

export default Progress;