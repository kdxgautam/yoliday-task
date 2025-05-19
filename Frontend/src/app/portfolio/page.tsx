"use client";

import CourseCard from "@/Components/CourseCard";
import { useState } from "react";
import { useProjects } from "@/hooks/useProjects";
import { useCart } from "@/hooks/useCart";

function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const { projectsData, loading, error, fetchProjects } = useProjects(currentPage);
  const { cartItems, addToCart, isInCart, addingToCart } = useCart();

  const totalPages = Math.ceil(projectsData.total / projectsData.limit) || 1;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      fetchProjects(newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      fetchProjects(newPage);
    }
  };

  return (
    <div className="h-full w-full pt-6 sm:pt-6 overflow-auto sm:overflow-auto pb-20 sm:pb-6">
      <div className="w-[88%] mx-auto sm:w-[90%] md:w-[80%] sm:ml-6">
        <div className="flex flex-col sm:items-start gap-4">
          {loading ? (
            <div className="w-full flex justify-center p-8">
              <p className="text-gray-500">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="w-full flex justify-center p-8">
              <p className="text-red-500">{error}</p>
            </div>
          ) : projectsData.projects.length > 0 ? (
            <>
              {projectsData.projects.map((project) => (
                <div key={project.id} className="w-full">
                  <CourseCard
                    image={project.image_url}
                    title={project.title}
                    description={project.description}
                    language={project.category}
                    author={project.author}
                    onAddToCart={() => addToCart(project.id)}
                    isInCart={isInCart(project.id)}
                    isLoading={addingToCart === project.id}
                  />
                </div>
              ))}

              <div className="w-full text-center text-sm text-gray-600 mt-4">
                Showing {(currentPage - 1) * projectsData.limit + 1} to{" "}
                {Math.min(currentPage * projectsData.limit, projectsData.total)}{" "}
                of {projectsData.total} projects
              </div>

              <div className="w-full flex justify-center items-center mt-4 gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage <= 1}
                  className={`px-4 py-2 rounded ${
                    currentPage <= 1
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Previous
                </button>

                <span className="text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}
                  className={`px-4 py-2 rounded ${
                    currentPage >= totalPages
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="w-full flex justify-center p-8">
              <p className="text-gray-500">No projects found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
