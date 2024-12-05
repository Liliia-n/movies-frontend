type Token = {
  token: string;
};

type User = {
  id: string;
  name: string;
};

type AuthState = {
  user: User | null;
  token: Token | null;
};

export type { User, Token, AuthState };
