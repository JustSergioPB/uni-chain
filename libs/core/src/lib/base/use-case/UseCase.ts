import { Observable } from 'rxjs';

export interface UseCase<S, T> {
  execute(query: S): Observable<T>;
}