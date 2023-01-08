import React from "react";
import { Link } from 'react-router-dom'
import "./index.css"
export const Register = () => {

    return (
        
        <div class="main">
        <form className="fre">
          <div className="basdig">
          <div className="yazi"><h2 class="first_title">Sign Up</h2>
          <p class="first_sub_title" id="sub_title">It's quick and easy.</p> </div>
          <div className="icon"><Link to="/"><i className="fa-solid fa-xmark"></i></Link></div>
          </div>
          
          <hr />
          <div class="input">
            <input type="text" placeholder="First Name" class="first_name" id="all" required />
            <input type="text" placeholder="Sure Name" class="sure_name" id="all" required />
            <br />
            <input type="email" placeholder="Mobile number or email address" id="all1" required />
            <br />
            <input type="password" placeholder="New password" id="all1" required />
            <br />
          </div>
          <p class="sub_title_2" id="sub_title">Date of Birth</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select>
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
          <select>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
          </select>
          <br />
          
          <p class="sub_title_3" id="sub_title">Gender</p>
          <div class="female" id="all_gender">
            <label for="female"><b>Female</b> </label>
            <input type="radio" name="gender" value="female" />
          </div>
          <div class="male" id="all_gender">
            <label for="male"><b>Male   </b></label>
            <input type="radio" name="gender" value="male" />
          </div>
          <div class="other" id="all_gender">
            <label for="other"><b>Custom  </b></label>
            <input type="radio" name="gender" value="other" />
          </div>
          
          <br />
          <p class="sub_title_4">
            By clicking Sign Up, you agree to our <a href="#"> Terms, Data Policy</a> and
            <a href="">Cookie</a>
            Policy. You may receive SMS notifications from us and can opt out at any time.
          </p>
          <input type="submit" value="Signup" class="submit" />
        </form>
      </div>
    )
}
export default Register