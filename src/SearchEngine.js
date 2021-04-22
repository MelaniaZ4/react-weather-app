import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="col-md-8">
          <input
            placeholder="Type city name"
            type="search"
            className="form-control"
            autoComplete="off"
          ></input>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          ></input>
        </div>
      </div>
    </form>
  );
}