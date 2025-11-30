import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Heart,
  Clock,
  MapPin,
  Phone,
  Bird,
  ChevronRight,
  ChevronDown,
  Shield,
  Users,
  Moon,
  Feather,
  AlertTriangle,
  CircleCheck,
  CircleAlert,
  CircleHelp,
  Play
} from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Floating feathers decoration */}
      <div className="floating-leaves">
        <Feather className="leaf leaf-1" />
        <Feather className="leaf leaf-2" />
        <Feather className="leaf leaf-3" />
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <Heart className="heart-icon" />
              <Bird className="bird-icon" />
            </div>
            <span className="logo-text">HelpThatBird</span>
          </div>
          <nav className="nav">
            <a href="#help" className="nav-link">Get Help</a>
            <a href="#learn" className="nav-link">Learn</a>
            <a href="#resources" className="nav-link">Resources</a>
            <button className="emergency-btn">
              <Phone size={16} />
              Emergency
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Found a bird and not sure what to do?
              <span className="highlight">We'll help you figure it out.</span>
            </h1>
            <p className="hero-subtitle">
              You don't need to know if it's injured. You don't need to be an expert.
              <strong> We'll guide you through what to look for, when to act, and when to wait.</strong>
            </p>

            <div className="hero-actions">
              <motion.button
                className="primary-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Bird size={20} />
                I found a bird — help me decide what to do
                <ChevronRight size={20} />
              </motion.button>
              <button className="secondary-btn">
                <Clock size={18} />
                I'm already watching one
              </button>
            </div>

            <div className="trust-badges">
              <div className="badge">
                <Shield size={16} />
                <span>Based on Australian wildlife guidelines</span>
              </div>
              <div className="badge">
                <Users size={16} />
                <span>Built from real rescue experiences</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="assessment-card">
              <div className="assessment-header">
                <div className="assessment-icon">
                  <Bird size={32} />
                </div>
                <h3>Quick Assessment</h3>
                <p>Find out if the bird needs help</p>
              </div>

              <div className="assessment-outcomes">
                <div className="outcome safe">
                  <CircleCheck size={20} />
                  <span>Probably fine — keep watching</span>
                </div>
                <div className="outcome caution">
                  <CircleHelp size={20} />
                  <span>Needs monitoring</span>
                </div>
                <div className="outcome urgent">
                  <CircleAlert size={20} />
                  <span>Needs help now</span>
                </div>
              </div>

              <motion.button
                className="assessment-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} />
                Start Assessment
                <span className="time-estimate">Takes 1 minute</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="scroll-arrow" />
          </motion.div>
        </div>
      </section>

      {/* The Problem Section - Empathy */}
      <section className="problem-section">
        <div className="problem-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="problem-text"
          >
            <h2>The hardest part? Not knowing.</h2>
            <blockquote className="story-quote">
              "I found a bird in my backyard. It was hopping around, so I googled it —
              the flowchart said 'if it's a fledgling learning to fly, don't intervene.'
              So I left it alone. By evening, it was huddled in the corner, barely moving.
              I brought it inside overnight... but by morning, it was gone.
              <br/><br/>
              <strong>I still don't know if I did the right thing. Or what I should have done differently.</strong>"
            </blockquote>
            <p className="problem-explain">
              Online guides give you a <strong>one-time decision</strong> based on a single moment.
              But birds don't stay the same. Situations change. And nobody tells you:
              <strong> what should I look for next? When does 'wait and see' become 'act now'?</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="core-problem-section">
        <div className="core-problem-content">
          <h2 className="section-title">The problem with current advice</h2>
          <div className="problem-cards">
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>"Is it injured?"</h3>
              <p>You're asked to diagnose something you can't see. Birds hide pain. They don't limp like dogs or cry like cats.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>"Leave fledglings alone"</h3>
              <p>Good advice in general — but what if it's still there 6 hours later? What about overnight? Nobody says.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>"Call the hotline"</h3>
              <p>It's 10pm. Nobody answers. Now what? You're left alone with a bird and no guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="difference-section">
        <h2 className="section-title">How we help instead</h2>
        <div className="difference-grid">
          <motion.div
            className="difference-card"
            whileHover={{ y: -4 }}
          >
            <div className="card-icon clock-icon">
              <Clock />
            </div>
            <h3>We don't ask you to diagnose</h3>
            <p>
              Instead, we ask simple questions: <em>Where is it? What's it doing? How long has it been there?</em>
              You observe. We help you understand what it means.
            </p>
          </motion.div>

          <motion.div
            className="difference-card"
            whileHover={{ y: -4 }}
          >
            <div className="card-icon alert-icon">
              <AlertTriangle />
            </div>
            <h3>Clear warning signs</h3>
            <p>
              Not "does it look injured?" but specific things to watch for:
              <strong> fluffed feathers, eyes closing, not reacting to you, still there after dark.</strong>
            </p>
          </motion.div>

          <motion.div
            className="difference-card"
            whileHover={{ y: -4 }}
          >
            <div className="card-icon night-icon">
              <Moon />
            </div>
            <h3>Guidance that doesn't stop at 5pm</h3>
            <p>
              It's midnight and you're worried. We tell you exactly what to do:
              <strong> how to keep it safe overnight, and where to go first thing tomorrow.</strong>
            </p>
          </motion.div>

          <motion.div
            className="difference-card"
            whileHover={{ y: -4 }}
          >
            <div className="card-icon location-icon">
              <MapPin />
            </div>
            <h3>Real resources, near you</h3>
            <p>
              24-hour vets that actually take wildlife.
              Rescue groups in your area.
              Not a generic list — <strong>places you can actually go to.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="quickstart-section">
        <h2 className="section-title">How it works</h2>
        <p className="section-subtitle">Three simple steps</p>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Tell us what you see</h3>
            <p>Answer a few simple questions about the bird and the situation. No expertise needed.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Get guidance</h3>
            <p>We'll tell you what to do now, what to watch for, and when to check back.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Stay supported</h3>
            <p>We'll remind you to re-check, and adjust advice as the situation changes.</p>
          </div>
        </div>

        <motion.button
          className="start-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Bird size={20} />
          I found a bird — help me
          <ChevronRight />
        </motion.button>
      </section>

      {/* Reassurance Footer */}
      <section className="reassurance-section">
        <div className="reassurance-content">
          <Heart className="reassurance-icon" />
          <h2>You care. That's what matters.</h2>
          <p>
            You found a bird and you're trying to do the right thing.
            That's already more than most people do. We're here to help you
            <strong> turn that care into the right action</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <Heart className="heart-icon" />
              <span>HelpThatBird</span>
            </div>
            <p>Helping Australians help birds since 2025</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Help</h4>
              <a href="#">I found a bird</a>
              <a href="#">Emergency contacts</a>
              <a href="#">24hr vet list</a>
            </div>
            <div className="footer-column">
              <h4>Learn</h4>
              <a href="#">Common situations</a>
              <a href="#">Fledgling vs injured</a>
              <a href="#">Overnight care</a>
            </div>
            <div className="footer-column">
              <h4>About</h4>
              <a href="#">Our story</a>
              <a href="#">Why we built this</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 HelpThatBird. Made in Australia, for Australian birds.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
