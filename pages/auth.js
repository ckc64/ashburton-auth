import React from 'react'
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import FirebaseAuth from '../components/FirebaseAuth'

const styles = {
  content: {
    padding: `8px 32px`,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 16,
  },
}

const Auth = () => (
  <div style={styles.content}>
    <div style={styles.textContainer}>
      <p>
        Sign in your account
      </p>
    </div>
    <div>
      <FirebaseAuth />
    </div>
  </div>
)

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth)
