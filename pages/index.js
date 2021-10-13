
import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

const styles = {
  container: {

    alignItems: 'center',
    padding: 16,
    textAlign: 'center'
  },

}

const Index = () => {
  const AuthUser = useAuthUser()
  return (
    <div style={styles.container}>
      {
        AuthUser.email ?
          <div></div>
          : <p>You are not signed in.</p>

      }

      {
        AuthUser.email ? <div></div> : <Link href="/auth">
          <a>
            <button type="button" style={styles.button}>
              Sign in
            </button>
          </a>
        </Link>
      }

      <div >
        {
          AuthUser.email ?

            <p>You are already signed in, your email is {AuthUser.email}.</p> : <div></div>
        }

        {
          AuthUser.email ?

            <button
              type="button"
              onClick={() => {
                AuthUser.signOut()
              }}
              style={styles.button}
            >
              Sign out
            </button> : <div></div>
        }


      </div>

    </div>
  )
}

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Index)