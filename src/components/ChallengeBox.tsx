import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handChallgenSucceeded() {
    completeChallenge();
    resetCountdown();
  }
  function handChallgenFailed() {
    resetChallenge();
    resetCountdown();
  }
  return (

    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handChallgenFailed}
            >
              Falhei
              </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handChallgenSucceeded}
            >
              Completei
              </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>

            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de Level completando desafios.
        </p>
          </div>
        )}
    </div>
  )
}