import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { AccordionBodyContainer, AccordionContainer } from "./styled";

const AccordionComponent = () => {
  const [activeAccordion, setActiveAccordion] = useState("0");

  const handleToggle = (id) => {
    setActiveAccordion(id[0] === activeAccordion ? null : id[0]);
  };
  
  return (
    <>
      <div className="section-header">
        <div className="section-label">Q&A</div>
        <div className="section-title">Frequently Asked Questions</div>
      </div>
      <AccordionContainer>
        <Accordion
          preExpanded={[activeAccordion]}
          onChange={handleToggle}
          allowZeroExpanded={true}
        >
          <AccordionItem uuid="0">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="accordion-main-title">
                  1. What is need of solar panels cleaning ?
                </span>
                {activeAccordion === "0" ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <AccordionBodyContainer>
                <div className="section-content">
                  There are a couple of reasons why solar panels need to be
                  cleaned regularly:
                </div>
                <div className="key-points">
                  <div className="key-points-item">
                    <div className="title">• Efficiency</div>
                    <div className="content">
                      - Dirt, dust, and debris buildup on the panels can block
                      sunlight from reaching the solar cells, which reduces
                      their efficiency in converting sunlight into electricity.
                      Studies show this can lead to a loss of 7% or more in
                      energy production annually.
                    </div>
                  </div>
                  <div className="key-points-item">
                    <div className="title">• Durability</div>
                    <div className="content">
                      - A buildup of grime on the panels can also trap heat,
                      which can damage the solar cells and shorten their
                      lifespan. Regular cleaning helps to prevent this
                      degradation.
                    </div>
                  </div>
                  <div className="key-points-item">
                    <div className="title">• Maintain your warranty</div>
                    <div className="content">
                      - Some solar panel warranties require that the panels be
                      cleaned regularly.
                    </div>
                  </div>
                  <div className="key-points-item">
                    <div className="title">• Improve aesthetics</div>
                    <div className="content">
                      - Clean panels just look better!
                    </div>
                  </div>
                  <div className="key-points-item">
                    <div className="title">• Allow for inspections</div>
                    <div className="content">
                      - A buildup of dirt can make it difficult to inspect the
                      panels for damage.
                    </div>
                  </div>
                </div>
                <div className="section-content">
                  So, while solar panels are relatively low-maintenance, regular
                  cleaning is an important part of keeping them operating at
                  peak efficiency and ensuring a good return on your investment.
                </div>
              </AccordionBodyContainer>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="1">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="accordion-main-title">
                  2. What is frequency time of cleaning solar panel?
                </span>
                {activeAccordion === "1" ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="section-content">
                - The frequency of solar panel cleaning depends on the rate of
                dust accumulation. Some installations may require cleaning as
                frequently as every ten days, while others may only necessitate
                cleaning every twenty to thirty days. A key indicator for
                cleaning is a noticeable decline in energy generation
                efficiency, typically exceeding 7-10%. Our data suggests that a
                majority (approximately 50%) of our clients benefit from
                bi-weekly cleaning (twice per month) at the 15-day mark.
                However, other clients prefer a monthly cleaning schedule
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="2">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="accordion-main-title">
                  3. How to Clean Solar Panel ?
                </span>
                {activeAccordion === "2" ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="section-content">
                - Professional cleaning with specialized tools offers the most
                effective and safe method for maintaining solar panel
                efficiency. While seemingly convenient, DIY methods like
                squeegees can cause scratches, and water hoses alone may not
                achieve a thorough clean, leading to wasted water and time.
                Pressure washers are strictly contraindicated due to the high
                water pressure potentially damaging both the glass and the
                delicate solar cells within the panels.
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="3">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="accordion-main-title">
                  4. Which is best time to clean solar panels
                </span>
                {activeAccordion === "3" ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="section-content">
                The ideal time to clean solar panels involves balancing two
                factors: cool panel temperature and low light conditions. Here's
                a breakdown of why these factors matter and when they converge
                for optimal cleaning:
              </div>
              <div className="key-points">
                <div className="key-points-item">
                  <div className="title">• Cool Panel Temperature</div>
                  <div className="content">
                    - Hot panels can be susceptible to thermal shock when
                    cleaned with cold water, potentially causing cracks.
                    Therefore, avoiding cleaning during the hottest part of the
                    day is crucial.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Low Light Conditions</div>
                  <div className="content">
                    - Cleaning with direct sunlight hitting the panels can lead
                    to rapid water evaporation, leaving behind mineral deposits
                    that can reduce efficiency.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Early Morning</div>
                  <div className="content">
                    - Panels are still cool from the night and haven't begun
                    generating significant electricity yet.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Late Afternoon:</div>
                  <div className="content">
                    - Sun's intensity weakens, and panels start to cool down.
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem uuid="4">
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="accordion-main-title">
                  5. why professional cleaning for solar power plant ?
                </span>
                {activeAccordion === "4" ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="section-content">
                Here's why professional cleaning is often recommended for solar
                power plants:
              </div>
              <div className="key-points">
                <div className="key-points-item">
                  <div className="title">• Expertise and Equipment</div>
                  <div className="content">
                    - Professionals possess the knowledge and experience to
                    clean solar panels safely and effectively. They understand
                    the delicate nature of the panels and use specialized
                    cleaning equipment designed to remove dirt and debris
                    without causing scratches or damage.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Safety</div>
                  <div className="content">
                    - Cleaning solar panels, especially on large-scale power
                    plants, can involve working at heights. Professionals are
                    trained in fall protection and other safety protocols to
                    minimize risk.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Efficiency and Time Savings</div>
                  <div className="content">
                    - Professionals have the experience and equipment to clean
                    panels quickly and efficiently, minimizing downtime for your
                    solar power plant. This translates to maximized energy
                    production and return on investment.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Thorough Cleaning</div>
                  <div className="content">
                    - Professionals use specialized cleaning solutions and
                    techniques to ensure a complete and thorough cleaning,
                    removing not just visible dirt but also stubborn grime and
                    bird droppings that can significantly impact efficiency.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Warranty Compliance</div>
                  <div className="content">
                    - Some solar panel warranties require professional cleaning
                    at specific intervals. Hiring professionals ensures you meet
                    these requirements and don't jeopardize your warranty
                    coverage.
                  </div>
                </div>
                <div className="key-points-item">
                  <div className="title">• Peace of Mind</div>
                  <div className="content">
                    - Hiring professionals allows you to focus on other aspects
                    of your business while having confidence that your solar
                    power plant is being maintained optimally.
                  </div>
                </div>
              </div>
              <div className="section-content">
                While DIY cleaning might seem like a cost-saving option for
                smaller setups, the benefits of professional cleaning,
                particularly for large-scale power plants, often outweigh the
                initial cost.
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </AccordionContainer>
    </>
  );
};

export default AccordionComponent;
