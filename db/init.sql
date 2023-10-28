-- Create the 'todolist' table
CREATE TABLE todolist (
    id SERIAL PRIMARY KEY,
    title character varying(255) NOT NULL UNIQUE
);

-- Insert data into the 'todolist' table
INSERT INTO todolist (id, title)
VALUES
    (1, 'Task 1 for today'),
    (2, 'Complete project proposal'),
    (3, 'Meeting with the team at 2 PM'),
    (4, 'Buy groceries'),
    (5, 'Prepare presentation for the client'),
    (6, 'Review code for the new feature'),
    (7, 'Gym session at 6 PM'),
    (8, 'Call John regarding the project'),
    (9, 'Read the new software development book'),
    (10, 'Submit the weekly progress report'),
    (11, 'Write a blog post on programming'),
    (12, 'Task 2 for today'),
    (13, 'Fix the bug in the login module'),
    (14, 'Plan the weekend trip'),
    (15, 'Prepare for the upcoming exam'),
    (16, 'Review the design for the website'),
    (17, 'Learn a new programming language');

