import { api } from "../api/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * Hook for fetching CV
 */
export function useCVInfo() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["cvinfo"],
    queryFn: api.getCVInfo,
    staleTime: 0,
    cacheTime: Infinity,
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData(["cvinfo"]);
      if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        queryClient.setQueryData(["cvinfo"], newData);
      }
    },
  });
}

/**
 * Hook for fetching projects
 */
export function useProjects() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["projects"],
    queryFn: api.getProjects,
    staleTime: 0,
    cacheTime: Infinity,
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData(["projects"]);
      if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        queryClient.setQueryData(["projects"], newData);
      }
    },
  });
}

/**
 * Hook for fetching skills
 */
export function useSkills() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["skills"],
    queryFn: api.getSkills,
    staleTime: 0,
    cacheTime: Infinity,
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData(["skills"]);
      if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        queryClient.setQueryData(["skills"], newData);
      }
    },
  });
}

/**
 * Hook for fetching facts
 */
export function useFacts() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["facts"],
    queryFn: api.getFacts,
    staleTime: 0,
    cacheTime: Infinity,
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData(["facts"]);
      if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        queryClient.setQueryData(["facts"], newData);
      }
    },
  });
}

/**
 * Hook for fetching education records
 */
export function useEducation() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["education"],
    queryFn: api.getEducation,
    staleTime: 0,
    cacheTime: Infinity,
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData(["education"]);
      if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        queryClient.setQueryData(["education"], newData);
      }
    },
  });
}

/**
 * Hook for fetching certifications
 */
export function useCertifications() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["certifications"],
    queryFn: api.getCertifications,
    staleTime: 0,
    cacheTime: Infinity,
    onSuccess: (newData) => {
      const oldData = queryClient.getQueryData(["certifications"]);
      if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
        queryClient.setQueryData(["certifications"], newData);
      }
    },
  });
}
