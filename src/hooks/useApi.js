import { api } from "../api/client";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook for fetching CV
 */
export function useCVInfo() {
  return useQuery({
    queryKey: ["cvinfo"],
    queryFn: () => api.getCVInfo(),
  });
}

/**
 * Hook for fetching projects
 */
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => api.getProjects(),
  });
}

/**
 * Hook for fetching skills
 */
export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: () => api.getSkills(),
  });
}

/**
 * Hook for fetching facts
 */
export function useFacts() {
  return useQuery({
    queryKey: ["facts"],
    queryFn: () => api.getFacts(),
  });
}

/**
 * Hook for fetching education records
 */
export function useEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: () => api.getEducation(),
  });
}

/**
 * Hook for fetching certifications
 */
export function useCertifications() {
  return useQuery({
    queryKey: ["certifications"],
    queryFn: () => api.getCertifications(),
  });
}
