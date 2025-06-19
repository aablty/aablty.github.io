import { useState, useEffect } from "react";
import { api } from "../api/client";

/**
 * Hook for fetching CV
 */
export function useCVInfo() {
  const [cvinfo, setCVInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCVInfo = async () => {
      try {
        const data = await api.getCVInfo();
        setCVInfo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } 
    };

    fetchCVInfo();
  }, []);

  return { cvinfo, error };
}

/**
 * Hook for fetching projects
 */
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await api.getProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}

/**
 * Hook for fetching skills
 */
export function useSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const data = await api.getSkills();
        setSkills(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
  

    fetchSkills();
  }, []);

  return { skills, loading, error };
}

/**
 * Hook for fetching facts
 */
export function useFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        setLoading(true);
        const data = await api.getFacts();
        setFacts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchFacts();
  }, []);

  return { facts, loading, error };
}

/**
 * Hook for fetching education records
 */
export function useEducation() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        const data = await api.getEducation();
        setEducation(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return { education, loading, error };
}

/**
 * Hook for fetching certifications
 */
export function useCertifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        setLoading(true);
        const data = await api.getCertifications();
        setCertifications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return { certifications, loading, error };
}
