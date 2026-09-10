import type { Difficulty } from "./projectIdeas";

export type QuestionCategory =
  | "c"
  | "java"
  | "python"
  | "full-stack"
  | "sql"
  | "general";

export interface InterviewQuestion {
  id: number;
  question: string;
  answer: string;
  category: QuestionCategory;
  difficulty: Difficulty;
}

export const questionCategories: { value: QuestionCategory; label: string }[] = [
  { value: "c", label: "C" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "full-stack", label: "Full Stack & Web" },
  { value: "sql", label: "SQL & Databases" },
  { value: "general", label: "HR & General" },
];

type Row = [QuestionCategory, Difficulty, string, string];

/**
 * Frequently asked interview questions.
 * Answers are intentionally short reference points — expand them as needed.
 */
const rows: Row[] = [
  // ---------- C ----------
  ["c", "Beginner", "What is C and why is it still used?", "C is a compiled, procedural language that gives direct control over memory and maps closely to hardware, which keeps it relevant for operating systems, embedded software and performance-critical tools."],
  ["c", "Beginner", "What are the basic data types in C?", "int, float, double, char and void, along with modifiers such as short, long, signed and unsigned."],
  ["c", "Beginner", "What is the difference between declaration and definition?", "A declaration introduces a name and its type; a definition also allocates storage or provides the body."],
  ["c", "Beginner", "What is the difference between = and ==?", "= assigns a value to a variable; == compares two values and returns a truth result."],
  ["c", "Beginner", "What are header files used for?", "They declare functions, macros and types so multiple source files can share the same interface."],
  ["c", "Beginner", "What is the difference between while and do-while?", "while tests the condition before the first iteration; do-while executes the body once before testing."],
  ["c", "Beginner", "What is an array?", "A contiguous block of memory holding elements of the same type, accessed by index starting at zero."],
  ["c", "Intermediate", "What is a pointer?", "A variable that stores the memory address of another variable, allowing indirect access and modification."],
  ["c", "Intermediate", "What is pointer arithmetic?", "Adding or subtracting integers from a pointer moves it by whole elements of the pointed-to type, not by single bytes."],
  ["c", "Intermediate", "What is the difference between malloc and calloc?", "malloc allocates uninitialised memory in one block; calloc allocates and zero-initialises memory for a number of elements."],
  ["c", "Intermediate", "What is a memory leak and how do you avoid it?", "Memory that was allocated but never freed. Avoid it by pairing every allocation with a free on all exit paths."],
  ["c", "Intermediate", "What is a dangling pointer?", "A pointer that still holds an address whose memory has been freed or gone out of scope. Set such pointers to NULL."],
  ["c", "Intermediate", "What is the difference between struct and union?", "A struct allocates space for all members; a union shares one block of memory across members, so only one is valid at a time."],
  ["c", "Intermediate", "What is the difference between call by value and call by reference?", "Call by value copies the argument; passing a pointer lets the function modify the caller's variable."],
  ["c", "Intermediate", "What does the static keyword do?", "On a local variable it preserves value between calls; on a global or function it limits linkage to the current file."],
  ["c", "Intermediate", "What is the difference between const and #define?", "const is a typed, scoped variable checked by the compiler; #define is a textual preprocessor substitution."],
  ["c", "Intermediate", "How are strings represented in C?", "As character arrays terminated by a null character '\\0'."],
  ["c", "Intermediate", "What is the difference between strcpy and strncpy?", "strncpy limits the number of characters copied, which reduces buffer overflow risk but may leave the result unterminated."],
  ["c", "Intermediate", "What are storage classes in C?", "auto, register, static and extern — they control lifetime, scope and linkage."],
  ["c", "Intermediate", "What is recursion? Give a trade-off.", "A function calling itself with a smaller input. It can be clearer than loops but uses stack space and risks overflow."],
  ["c", "Advanced", "What is a function pointer and where is it useful?", "A pointer that stores a function's address, used for callbacks, dispatch tables and pluggable behaviour."],
  ["c", "Advanced", "Explain the difference between stack and heap memory.", "The stack stores automatic variables with automatic cleanup and limited size; the heap is manually managed, larger and longer-lived."],
  ["c", "Advanced", "What is undefined behaviour? Give examples.", "Code the standard places no requirements on — reading uninitialised memory, out-of-bounds access or signed overflow. It can appear to work and then fail."],
  ["c", "Advanced", "What are the stages of compilation in C?", "Preprocessing, compilation to assembly, assembly to object code and linking into an executable."],
  ["c", "Advanced", "What is a segmentation fault and how do you debug it?", "A crash from invalid memory access. Debug with GDB backtraces, boundary checks and tools that detect invalid access."],

  // ---------- Java ----------
  ["java", "Beginner", "What is the difference between JDK, JRE and JVM?", "The JVM runs bytecode, the JRE is the JVM plus core libraries, and the JDK adds development tools such as the compiler."],
  ["java", "Beginner", "Why is Java called platform independent?", "Source compiles to bytecode, which any JVM implementation can execute, so the same artefact runs on different platforms."],
  ["java", "Beginner", "What are the four pillars of OOP?", "Encapsulation, inheritance, polymorphism and abstraction."],
  ["java", "Beginner", "What is the difference between a class and an object?", "A class is the blueprint describing state and behaviour; an object is a concrete instance of it in memory."],
  ["java", "Beginner", "What is a constructor?", "A special method invoked on object creation to initialise state. It has the class name and no return type."],
  ["java", "Beginner", "What is the difference between overloading and overriding?", "Overloading is same name with different parameters in one class (compile time); overriding replaces a superclass method in a subclass (runtime)."],
  ["java", "Beginner", "What are access modifiers in Java?", "private, default (package-private), protected and public — they control visibility."],
  ["java", "Beginner", "What is the difference between String, StringBuilder and StringBuffer?", "String is immutable; StringBuilder is mutable and fast but not thread-safe; StringBuffer is mutable and synchronised."],
  ["java", "Intermediate", "What is the difference between an abstract class and an interface?", "An abstract class can hold state and constructors and supports single inheritance; an interface defines a contract and allows multiple implementation."],
  ["java", "Intermediate", "Explain the Java Collections hierarchy.", "Collection branches into List, Set and Queue; Map is separate. Common implementations are ArrayList, LinkedList, HashSet, TreeSet and HashMap."],
  ["java", "Intermediate", "What is the difference between ArrayList and LinkedList?", "ArrayList gives fast random access with costly middle insertions; LinkedList gives cheap insertion and removal but slower indexed access."],
  ["java", "Intermediate", "How does HashMap work internally?", "Keys are hashed to buckets; collisions are chained (converting to a tree beyond a threshold) and the table resizes when the load factor is exceeded."],
  ["java", "Intermediate", "What is the difference between HashMap and Hashtable?", "HashMap is unsynchronised and allows one null key; Hashtable is synchronised, legacy and allows no nulls."],
  ["java", "Intermediate", "Why must equals and hashCode be overridden together?", "Hash-based collections locate objects by hash first, so equal objects must produce equal hash codes or lookups fail."],
  ["java", "Intermediate", "What is the difference between checked and unchecked exceptions?", "Checked exceptions must be declared or handled at compile time; unchecked exceptions extend RuntimeException and are not enforced."],
  ["java", "Intermediate", "What is the purpose of the finally block?", "It always runs after try/catch, making it the place for cleanup such as closing resources."],
  ["java", "Intermediate", "What is the difference between final, finally and finalize?", "final marks something unchangeable, finally is a block that always executes, and finalize was a deprecated pre-collection hook."],
  ["java", "Intermediate", "What is the static keyword used for in Java?", "It binds a field or method to the class rather than an instance, shared across all objects."],
  ["java", "Intermediate", "What is the difference between == and equals()?", "== compares references for objects; equals() compares logical value as defined by the class."],
  ["java", "Intermediate", "What are generics and why use them?", "Type parameters that give compile-time type safety and remove the need for casting in collections and APIs."],
  ["java", "Intermediate", "What is autoboxing?", "Automatic conversion between primitives and their wrapper classes, for example int to Integer."],
  ["java", "Intermediate", "What is a lambda expression?", "A concise way to express an implementation of a functional interface, enabling behaviour to be passed as data."],
  ["java", "Intermediate", "What is the Stream API used for?", "Declarative processing of collections through pipelines of operations such as filter, map, sorted and collect."],
  ["java", "Intermediate", "What is the difference between an interface and a functional interface?", "A functional interface declares exactly one abstract method, which makes it usable as a lambda target."],
  ["java", "Advanced", "Explain the Java memory model areas.", "Heap for objects, stack per thread for frames, metaspace for class metadata, plus program counter and native method stacks."],
  ["java", "Advanced", "How does garbage collection work in Java?", "The collector reclaims objects unreachable from GC roots, typically using generational young and old spaces with different collection strategies."],
  ["java", "Advanced", "What is the difference between synchronized and volatile?", "synchronized provides mutual exclusion and visibility for a block or method; volatile only guarantees visibility of a single variable."],
  ["java", "Advanced", "What is a deadlock and how do you prevent it?", "Two threads each hold a lock the other needs. Prevent it with consistent lock ordering, timeouts or lock-free structures."],
  ["java", "Advanced", "What is dependency injection?", "Supplying a class's collaborators from outside instead of constructing them internally, which improves testability and decoupling."],
  ["java", "Advanced", "What is the difference between Comparable and Comparator?", "Comparable defines a class's natural ordering internally; Comparator defines an external, swappable ordering."],

  // ---------- Python ----------
  ["python", "Beginner", "What are Python's key features?", "Readable dynamic syntax, automatic memory management, a large standard library, multiple paradigms and a strong package ecosystem."],
  ["python", "Beginner", "What is the difference between a list and a tuple?", "Lists are mutable; tuples are immutable, hashable when their contents are, and slightly faster."],
  ["python", "Beginner", "What is a dictionary?", "An unordered-by-design mapping of unique keys to values with average constant-time lookup."],
  ["python", "Beginner", "What is the difference between is and ==?", "is compares object identity; == compares value using the type's equality rules."],
  ["python", "Beginner", "How do you handle exceptions in Python?", "With try/except, optionally else and finally, catching the narrowest useful exception type."],
  ["python", "Beginner", "What is indentation used for in Python?", "It defines block structure; Python has no braces, so consistent indentation is part of the syntax."],
  ["python", "Beginner", "What are *args and **kwargs?", "They collect a variable number of positional and keyword arguments respectively."],
  ["python", "Beginner", "What is a module and a package?", "A module is a single .py file; a package is a directory of modules that can be imported as a namespace."],
  ["python", "Intermediate", "What is a list comprehension?", "A concise expression that builds a list from an iterable with optional filtering, usually clearer than an explicit append loop."],
  ["python", "Intermediate", "What is a generator?", "A function using yield that produces values lazily, keeping memory use constant for large sequences."],
  ["python", "Intermediate", "What is a decorator?", "A callable that wraps another function to add behaviour such as logging, caching or access checks without editing it."],
  ["python", "Intermediate", "What is the difference between shallow and deep copy?", "A shallow copy copies the outer object and shares nested references; a deep copy recursively duplicates nested objects."],
  ["python", "Intermediate", "What are Python's mutable and immutable types?", "Mutable: list, dict, set. Immutable: int, float, str, tuple, frozenset."],
  ["python", "Intermediate", "What does self refer to?", "The instance the method was called on; it is passed explicitly as the first parameter."],
  ["python", "Intermediate", "What is the difference between a class method and a static method?", "A classmethod receives the class as its first argument; a staticmethod receives neither instance nor class."],
  ["python", "Intermediate", "What are dunder methods?", "Special methods such as __init__, __str__ and __len__ that hook into language behaviour."],
  ["python", "Intermediate", "How does Python manage memory?", "Reference counting plus a cyclic garbage collector, with objects allocated in private heap space."],
  ["python", "Intermediate", "What is a virtual environment and why use one?", "An isolated dependency set per project so package versions do not conflict system-wide."],
  ["python", "Intermediate", "What is the difference between append and extend?", "append adds one element; extend adds every element of an iterable."],
  ["python", "Intermediate", "What is a context manager?", "An object usable with with that sets up and reliably tears down a resource, such as a file handle."],
  ["python", "Intermediate", "What is the difference between range and a list of numbers?", "range generates values lazily and uses constant memory; a list stores all values."],
  ["python", "Advanced", "What is the GIL?", "The Global Interpreter Lock permits one thread to execute Python bytecode at a time in CPython, limiting CPU-bound threading; use processes instead."],
  ["python", "Advanced", "What is monkey patching?", "Replacing attributes or methods at runtime. Useful in tests, risky in production code."],
  ["python", "Advanced", "Explain MRO in Python.", "Method Resolution Order defines the linearised order in which base classes are searched for an attribute under multiple inheritance."],
  ["python", "Advanced", "What is the difference between asyncio and threading?", "asyncio uses cooperative single-threaded concurrency for IO-bound work; threading uses OS threads and still contends on the GIL."],

  // ---------- SQL & Databases ----------
  ["sql", "Beginner", "What is a primary key?", "A column or set of columns that uniquely identifies each row and cannot be null."],
  ["sql", "Beginner", "What is a foreign key?", "A column referencing a primary key in another table, enforcing referential integrity."],
  ["sql", "Beginner", "What is the difference between WHERE and HAVING?", "WHERE filters rows before grouping; HAVING filters groups after aggregation."],
  ["sql", "Beginner", "What are the main types of JOIN?", "INNER, LEFT, RIGHT and FULL OUTER, plus CROSS JOIN for a cartesian product."],
  ["sql", "Intermediate", "What is the difference between DELETE, TRUNCATE and DROP?", "DELETE removes selected rows and can be rolled back; TRUNCATE removes all rows quickly; DROP removes the table structure entirely."],
  ["sql", "Intermediate", "What is normalisation?", "Organising tables to reduce redundancy and dependency, typically through first, second and third normal form."],
  ["sql", "Intermediate", "What is an index and what is the trade-off?", "A structure that speeds lookups on selected columns at the cost of extra storage and slower writes."],
  ["sql", "Intermediate", "What is the difference between UNION and UNION ALL?", "UNION removes duplicate rows; UNION ALL keeps everything and is faster."],
  ["sql", "Intermediate", "What are ACID properties?", "Atomicity, Consistency, Isolation and Durability — the guarantees that make transactions reliable."],
  ["sql", "Advanced", "What is a stored procedure?", "A named, precompiled set of SQL statements stored in the database and executed on demand."],
  ["sql", "Advanced", "What is the difference between clustered and non-clustered indexes?", "A clustered index defines the physical row order (one per table); a non-clustered index is a separate structure pointing to rows."],
  ["sql", "Advanced", "How would you find and fix a slow query?", "Read the execution plan, look for full scans and bad joins, add or adjust indexes, reduce returned columns and rewrite correlated subqueries."],

  // ---------- Full Stack & Web ----------
  ["full-stack", "Beginner", "What is the difference between frontend and backend?", "The frontend is the interface running in the browser; the backend handles business logic, data and integrations on the server."],
  ["full-stack", "Beginner", "What is an API?", "A defined interface that lets one program request data or actions from another, commonly over HTTP with JSON."],
  ["full-stack", "Beginner", "What are the common HTTP methods?", "GET to read, POST to create, PUT and PATCH to update, DELETE to remove."],
  ["full-stack", "Beginner", "What do status codes 200, 201, 400, 401, 404 and 500 mean?", "Success, created, bad request, unauthenticated, not found and server error respectively."],
  ["full-stack", "Beginner", "What is the difference between GET and POST?", "GET requests data with parameters in the URL and is cacheable; POST sends a body and is used for state-changing submissions."],
  ["full-stack", "Beginner", "What is responsive design?", "Layouts that adapt to viewport size using fluid grids, flexible media and CSS breakpoints."],
  ["full-stack", "Intermediate", "What is REST?", "An architectural style using resource-based URLs, standard HTTP methods and stateless requests."],
  ["full-stack", "Intermediate", "What is the difference between authentication and authorization?", "Authentication proves who the user is; authorization decides what that user is allowed to do."],
  ["full-stack", "Intermediate", "What is CORS?", "A browser policy that requires servers to opt in, via response headers, to requests from other origins."],
  ["full-stack", "Intermediate", "What is a JWT?", "A signed token carrying claims, used to authenticate stateless API requests. It must be validated server-side on every call."],
  ["full-stack", "Intermediate", "What is the difference between cookies, localStorage and sessionStorage?", "Cookies are sent with requests and can be HTTP-only; localStorage persists in the browser only; sessionStorage clears with the tab."],
  ["full-stack", "Intermediate", "What is the virtual DOM?", "An in-memory representation of the UI that React diffs against the previous render to apply minimal real DOM updates."],
  ["full-stack", "Intermediate", "What is the difference between props and state in React?", "Props are passed in and read-only; state is owned by the component and triggers a re-render when updated."],
  ["full-stack", "Intermediate", "What are React hooks? Name a few.", "Functions that add state and lifecycle behaviour to function components — useState, useEffect, useMemo, useCallback, useContext."],
  ["full-stack", "Intermediate", "What is Spring Boot and why is it used?", "An opinionated Spring framework layer with auto-configuration and embedded servers, which removes most boilerplate setup."],
  ["full-stack", "Intermediate", "What is an ORM?", "A layer that maps database tables to objects, such as Hibernate or the Django ORM, reducing manual SQL."],
  ["full-stack", "Intermediate", "What is MVC?", "A pattern separating data (model), presentation (view) and request handling (controller)."],
  ["full-stack", "Advanced", "How would you secure a REST API?", "Use HTTPS, authenticate every request, authorize per resource, validate all input, apply rate limits and never leak internal errors."],
  ["full-stack", "Advanced", "How do you improve web application performance?", "Reduce and compress payloads, cache at multiple layers, lazy-load assets, index database queries and avoid unnecessary re-renders."],
  ["full-stack", "Advanced", "What happens when you type a URL and press Enter?", "DNS resolution, TCP and TLS handshake, HTTP request, server processing, response, then parsing, asset fetching and rendering in the browser."],

  // ---------- HR & General ----------
  ["general", "Beginner", "Tell me about yourself.", "Give a 60-second structure: who you are, what you have learned, one project you are proud of and the role you are targeting."],
  ["general", "Beginner", "Why do you want this role?", "Connect the job's actual responsibilities to specific skills and work you have done, not to generic ambition."],
  ["general", "Beginner", "What are your strengths?", "Name two or three that matter for the role and prove each with a short concrete example."],
  ["general", "Beginner", "What are your weaknesses?", "Name a real one, then explain the specific steps you are taking to improve it."],
  ["general", "Beginner", "Walk me through a project you built.", "Cover the problem, your stack choices, your own contribution, one difficulty you hit and what you would change now."],
  ["general", "Beginner", "Where do you see yourself in three years?", "Show a credible growth path in the technical direction the role sits in."],
  ["general", "Intermediate", "How do you handle tight deadlines?", "Describe how you prioritise, communicate risk early and cut scope rather than quality."],
  ["general", "Intermediate", "Tell me about a time you failed.", "Pick a real example, keep blame out of it and focus on the specific lesson you applied afterwards."],
  ["general", "Intermediate", "How do you keep learning new technologies?", "Mention documentation, small projects and how you validate learning by building something that runs."],
  ["general", "Intermediate", "How do you work in a team?", "Give an example of code review, disagreement or handover that ended in a better outcome."],
  ["general", "Intermediate", "Do you have any questions for us?", "Ask about the team's work, how success is measured in the first six months and how code review works."],
  ["general", "Intermediate", "Why should we hire you?", "Summarise the overlap between what the role needs and what you have demonstrably done."],
];

export const interviewQuestions: InterviewQuestion[] = rows.map((row, index) => ({
  id: index + 1,
  category: row[0],
  difficulty: row[1],
  question: row[2],
  answer: row[3],
}));
