import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const clickHandlersRef = useRef<((() => void) | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container, index) => {
        if (container) {
          container.classList.remove("what-noTouch");

          const handler = () => handleClick(container);
          clickHandlersRef.current[index] = handler;

          container.addEventListener("click", handler);
        }
      });
    }

    return () => {
      containerRef.current.forEach((container, index) => {
        const handler = clickHandlersRef.current[index];
        if (container && handler) {
          container.removeEventListener("click", handler);
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* AI AUTOMATION */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI AUTOMATION</h3>
              <h4>Building Intelligent Automation Systems</h4>

              <p>
                I design and build AI automation workflows using modern tools
                like n8n, APIs, and AI models. From AI agents to automated
                business workflows, I create systems that save time and improve
                productivity.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">n8n</div>
                <div className="what-tags">OpenAI APIs</div>
                <div className="what-tags">Automation Workflows</div>
                <div className="what-tags">AI Agents</div>
                <div className="what-tags">API Integration</div>
                <div className="what-tags">Prompt Engineering</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* WEB DEVELOPMENT */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>WEB DEVELOPMENT</h3>
              <h4>Modern Full Stack Applications</h4>

              <p>
                I build modern responsive websites and applications using
                JavaScript technologies like React.js and Node.js. My focus is
                on performance, clean design, and scalable architecture.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Website Development</div>
                <div className="what-tags">UI Design</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}