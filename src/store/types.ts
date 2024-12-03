type ApiResponse<T> = {
  statusCode: number;
  response: T;
  isOfficial: boolean;
  canEdit: boolean;
  totalCount: number;
};

type SearchQuery = {
  search?: string | null;
  skip?: string;
  province?: string;
  city?: string;
  discipline?: string;
  nextMatches?: boolean;
};

export type { ApiResponse, SearchQuery };
