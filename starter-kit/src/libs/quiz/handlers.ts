import { db } from '@/fake-db/apps/quiz';
import type { Quiz } from '@/types/apps/quizTypes';

// Carregar quizzes do localStorage na inicialização
function loadQuizzesFromLocalStorage() {
  const storedQuizzes = localStorage.getItem('quizzes');
  if (storedQuizzes) {
    db.quizzes = JSON.parse(storedQuizzes);
  }
}

// Salvar quizzes no localStorage
function saveQuizzesToLocalStorage() {
  localStorage.setItem('quizzes', JSON.stringify(db.quizzes));
}

export function getQuizzes(): Quiz[] {
  loadQuizzesFromLocalStorage();  // Carregar do localStorage sempre que buscar quizzes
  return db.quizzes;
}

export function getQuizById(id: number): Quiz | undefined {
  loadQuizzesFromLocalStorage();  // Carregar quizzes do localStorage
  return db.quizzes.find(quiz => quiz.id === id);
}

export function createQuiz(newQuiz: Quiz): Quiz {
  loadQuizzesFromLocalStorage();  // Carregar quizzes antes de adicionar um novo
  newQuiz.id = Date.now();  // Usar Date.now() para garantir IDs únicos
  db.quizzes.push(newQuiz);
  saveQuizzesToLocalStorage();  // Salvar a lista atualizada no localStorage
  return newQuiz;
}

export function updateQuiz(id: number, updatedQuiz: Quiz): Quiz | null {
  loadQuizzesFromLocalStorage();  // Carregar quizzes antes de atualizar
  const quizIndex = db.quizzes.findIndex(quiz => quiz.id === id);

  if (quizIndex >= 0) {
    db.quizzes[quizIndex] = { ...db.quizzes[quizIndex], ...updatedQuiz };
    saveQuizzesToLocalStorage();  // Salvar quizzes após atualizar
    return db.quizzes[quizIndex];
  }

  return null;
}

export function deleteQuiz(id: number): boolean {
  loadQuizzesFromLocalStorage();  // Carregar quizzes antes de deletar
  const quizIndex = db.quizzes.findIndex(quiz => quiz.id === id);

  if (quizIndex >= 0) {
    db.quizzes.splice(quizIndex, 1);
    saveQuizzesToLocalStorage();  // Salvar quizzes após deletar
    return true;
  }

  return false;
}
