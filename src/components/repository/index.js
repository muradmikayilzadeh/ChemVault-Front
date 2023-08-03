import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.modules.css";

const Repository = (
    { cover, name, author, lastUpdate, size, description }
) => {
    return (
        <div class="repository">

            <div class="repo-cover-img">
                <img src={cover} alt="Repository Image" class="img img-responsive" />
            </div>

            <div class="repo-information">
                <h5 class="repo-name"><b>{name}</b></h5>
                <u class="author">{author}</u>
                <b class="last-update text-right"> {lastUpdate}</b>
                <hr />
                <p class="repo-description">
                    {description}
                </p>
                <hr />

                <div class="buttons">
                    <button type="submit" class="viewBtn">
                        <i class="fa-solid fa-eye"></i>
                    </button>

                    <button type="submit" class="viewBtn viewBtn-light">
                        <span>{size} </span>
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Repository;
