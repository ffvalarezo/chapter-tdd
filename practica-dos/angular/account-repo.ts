import { Account } from './models';

export interface AccountRepo {
  find(id: string): Account | undefined;
  save(account: Account): void;
}

export class AccountRepoInMemory implements AccountRepo {
  private db = new Map<string, Account>();
  constructor(seed?: Account[]) {
    seed?.forEach(a => this.db.set(a.id, a));
  }
  find(id: string): Account | undefined { return this.db.get(id); }
  save(account: Account): void { this.db.set(account.id, account); }
}
