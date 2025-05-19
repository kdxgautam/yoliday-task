// hooks/useProjects.ts
import { useEffect, useState } from "react";
import axios from "axios";

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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useProjects = (initialPage = 1) => {
  const [projectsData, setProjectsData] = useState<ProjectsResponse>({
    page: initialPage,
    limit: 10,
    total: 0,
    projects: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = async (page: number) => {
    setLoading(true);
    try {
      const resp = await axios.get<ProjectsResponse>(
        `${API_BASE_URL}/projects?page=${page}`
      );
      setProjectsData(resp.data);
    } catch (err) {
      setError("Failed to fetch projects.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects(initialPage);
  }, []);

  return { projectsData, loading, error, fetchProjects };
};
