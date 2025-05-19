// hooks/useSearchProjects.ts
import { useState, useEffect } from "react";
import { useProjects } from "./useProjects";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  image_url: string;
};

type ProjectsResponse = {
  page: number;
  limit: number;
  total: number;
  projects: Project[];
};

export const useSearchProjects = (initialPage = 1) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { projectsData, loading, error, fetchProjects } = useProjects(initialPage);
  const [filteredData, setFilteredData] = useState<ProjectsResponse>({
    page: initialPage,
    limit: 10,
    total: 0,
    projects: [],
  });

  // Update filtered data whenever original data or search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      // If no search term, use original data
      setFilteredData(projectsData);
    } else {
      // Filter projects by search term (case insensitive)
      const term = searchTerm.toLowerCase();
      const filtered = projectsData.projects.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.category.toLowerCase().includes(term) ||
          project.author.toLowerCase().includes(term)
      );

      setFilteredData({
        ...projectsData,
        projects: filtered,
        total: filtered.length,
      });
    }
    
  }, [searchTerm, projectsData]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
    originalData: projectsData,
    loading,
    error,
    fetchProjects,
  };
};
