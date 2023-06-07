import React from "react";
import { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
// import "@pathofdev/react-tag-input/build/index.css";
const initialState = {
  title: "",
  description: "",
  tags: [],
  trending: "no",
};

const categoryOptions = [
  "PersonalFinance",
  "StockMarket",
  "FinancialPlanning",
  "Real Estate",
  "Loans",
  "FinTech",
  "FinancialEducation",
  "LifeStyle and Money",
];

const AddEditblog = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const { title, tags, category, trending, description } = form;

  const handleChange = (e) => {};
  const handleTag = (e) => {};
  const handleTrending = (e) => {};
  const oncategoryChange = (e) => {};

  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12 text-center">
          <div className="text-center heading py-2">Create Blog</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form action="" className="row big-form">
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-12 py-3">
                <ReactTagInput
                  tags={tags}
                  placeholder="tags"
                  onChange={handleTag}
                />
              </div>
              <div className="col-12 py-3">
                <p className="trending">Is it trending?</p>
                <div className="form-check-inline ms-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="trending"
                    value="yes"
                    checked={trending === "yes"}
                    onChange={handleTrending}
                  ></input>
                  <label htmlFor="radioOption" className="form-check-label">
                    Yes &nbsp;
                  </label>
                </div>
                <div className="form-check-inline ms-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="trending"
                    value="no"
                    checked={trending === "no"}
                    onChange={handleTrending}
                  ></input>
                  <label htmlFor="radioOption" className="form-check-label">
                    No &nbsp;
                  </label>
                </div>
              </div>
              <div className="col-12 py-3">
                <select
                  value={category}
                  onChange={oncategoryChange}
                  name=""
                  id=""
                  className="catg-dropdown"
                >
                  <option>Please select category </option>
                  {categoryOptions.map((option, index) => {
                    <option value={option || ""} key={index}>
                      {option}
                    </option>;
                  })}
                </select>
              </div>

              <div className="col-12 py-3">
                <textarea
                  className="form-control description-box"
                  placeholder="description"
                  value={description}
                  onChange={handleChange}
                  name="description"
                />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditblog;
