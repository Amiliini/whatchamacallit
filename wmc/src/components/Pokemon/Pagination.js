import React from "react";

export default function Pagination({ goToNextPage, goToPreviousPage }) {
    return (
        <div>
            {goToPreviousPage && (
                <button
                    style={{
                        background: "yellow",
                        borderRadius: "8px",
                        padding: "8px",
                    }}
                    onClick={goToPreviousPage}
                >
                    Previous
                </button>
            )}
            {goToNextPage && (
                <button
                    style={{
                        background: "yellow",
                        borderRadius: "8px",
                        padding: "8px",
                    }}
                    onClick={goToNextPage}
                >
                    Next
                </button>
            )}
        </div>
    );
}
