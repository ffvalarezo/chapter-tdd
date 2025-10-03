import java.util.concurrent.ConcurrentHashMap;
public class InMemoryAccountRepo implements AccountRepo {
  private final ConcurrentHashMap<String,Account> db = new ConcurrentHashMap<>();
  public Account find(String id){ return db.get(id); }
  public void save(Account acc){ db.put(acc.id(), acc); }
}