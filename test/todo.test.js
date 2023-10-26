const { response } = require('express');
const app = require('../app');
const request = require('supertest');

describe('Todo Unit Test', () => {
    test('Add Todo Successfully', (done) => {
        const newTodo = {
            title: "Belajar NodeJS Advance"
        };

        request(app)
            .post('/api/todolist')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Todo Created Successfully');
                done();
            })
            .catch(done);
    });

    test('Get all list', (done) => {
        request(app)
            .get('/api/todolist')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.data.length).toBe(16);
                done();
            }).catch(done);
    });

    test('Get Detail Todo', (done) => {
        request(app)
            .get('/api/todolist/2')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.data.title).toBe("Meeting dengan klien");
                done();
            }).catch(done);
    });

    test('Edit Todo', (done) => {
        const id = 1;
        const updatedTodo = {
            title: 'Belajar NodeJS Express'
        };

        request(app)
            .put(`/api/todolist/${id}`)
            .send(updatedTodo)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe(`Todo Updated Successfully at ID: ${id}`);
                done();
            })
            .catch(done);
    });

    test('Deleted Todo', (done) => {
        const id = 23;

        request(app)
            .delete(`/api/todolist/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe(`Todo Deleted Successfully at ID: ${id}`);
                done();
            })
            .catch(done);
    });
});