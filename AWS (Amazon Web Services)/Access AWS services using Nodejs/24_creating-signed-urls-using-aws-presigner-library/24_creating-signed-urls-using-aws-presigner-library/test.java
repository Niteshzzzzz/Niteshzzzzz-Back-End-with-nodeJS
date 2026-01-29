import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

class test {

    public static void reverse(Queue<Integer> q) {
        // Stack<Integer> s = new Stack<>();
        Stack<Integer> s = new Stack<>();
        while(!q.isEmpty()) {
            s.push(q.remove());
        }
        while(!s.empty()) {
            q.add(s.pop());
        }
    }

    public static void main(String[] args) {
         Queue<Integer> q = new LinkedList<>();
        
        for(int i = 1; i <= 10; i++) {
            q.add(i);
        }
        
        System.out.println(q);
        reverse(q);
        System.out.println(q);
    }
}