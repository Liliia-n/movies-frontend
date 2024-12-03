type CommonResponse = {
  canEdit: boolean;
  isOfficial: boolean;
  response: string;
  statusCode: number;
};

type DetailedErrorResponse = {
  data: {
    canEdit: boolean;
    isOfficial: boolean;
    response: string;
    statusCode: number;
  };
  status: number;
};

type ErrorResponse = CommonResponse;

export type { CommonResponse, ErrorResponse, DetailedErrorResponse };
